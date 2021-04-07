from datetime import datetime
from flask import Flask

app = Flask(__name__, static_folder='../build', static_url_path='/')

@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/api/time')
def get_current_time():
    return {'time': {'hour': datetime.now().hour, 'minute': datetime.now().minute}}

# @app.errorhandler(404)
# def not_found(e):
#     return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run()