from flask import Blueprint, request, jsonify
from .utils import process_image, handle_text_input

api = Blueprint('api', __name__)

@api.route('/upload-image', methods=['POST'])
def upload_image():
    image = request.files.get('image')
    result = process_image(image)
    return jsonify(result)

@api.route('/chat', methods=['POST'])
def chat():
    text_input = request.json.get('text')
    response = handle_text_input(text_input)
    return jsonify(response)
