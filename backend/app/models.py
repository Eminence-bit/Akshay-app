from tensorflow.keras.models import load_model

# Load the image processing AI model
image_model = load_model('path/to/image_model.h5')

# Load the NLP model for handling text-based interactions
nlp_model = load_model('path/to/nlp_model.h5')
