from flask import Flask
from .routes import api

def create_app():
    app = Flask(__name__)
    
    # Register API blueprint
    app.register_blueprint(api)

    return app
