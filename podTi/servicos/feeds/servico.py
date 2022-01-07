from flask import Flask, jsonify
import mysql.connector as mysql

servico = Flask(__name__)

IS_ALIVE = "yes"
DEBUG = True
TAMANHO_PAGINA = 4

MYSQL_SERVER = "bancodados"
MYSQL_USER = "root"
MYSQL_PASS = "admin"
MYSQL_BANCO = "pod"

def get_conexao_bd():
    conexao = mysql.connect(
        host=MYSQL_SERVER, user=MYSQL_USER, password=MYSQL_PASS, database=MYSQL_BANCO)

    return conexao

def gerar_feed(registro):
    feed = {
        "_id": registro["feed_id"],
        "title": registro["feed_title"],
        "subtitle": registro["feed_subtitle"],
        "image": registro["image"],
        "description": registro["feed_description"],
    }

    return feed

@servico.route("/isalive")
def is_alive():
    return jsonify(alive=IS_ALIVE)    

@servico.route("/feeds/<int:pagina>")
def get_feeds(pagina):
    feeds = []

    conexao = get_conexao_bd()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute(
        "select feeds.id as feed_id, feeds.title as feed_title, feeds.subtitle as feed_subtitle, feeds.image, feeds.description as feed_description from feeds "+
        "limit " + str((pagina - 1) * TAMANHO_PAGINA) + ", " + str(TAMANHO_PAGINA))
    resultado = cursor.fetchall()
    for registro in resultado:
        feeds.append(gerar_feed(registro))
        

    return jsonify(feeds)

@servico.route("/feed/<int:feed_id>")
def get_feed(feed_id):
    feed = {}

    conexao = get_conexao_bd()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute(
        "select feeds.id as feed_id, feeds.title as feed_title, feeds.subtitle as feed_subtitle, feeds.image, feeds.description as feed_description from feeds  " +
        "where feeds.id = " + str(feed_id))
    registro = cursor.fetchone()
    if registro:
        feed = gerar_feed(registro)

    return jsonify(feed)

# rotina que coloca o servico no ar
if __name__ == "__main__":
    servico.run(
        host="0.0.0.0",
        # mostra msgs de erro
        debug=DEBUG
    )