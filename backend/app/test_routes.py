import unittest
from app import create_app

class TestRoutes(unittest.TestCase):
    
    def setUp(self):
        self.app = create_app().test_client()
    
    def test_image_upload(self):
        response = self.app.post('/upload-image', data={'image': (open('test_image.jpg', 'rb'), 'test_image.jpg')})
        self.assertEqual(response.status_code, 200)

    def test_chat(self):
        response = self.app.post('/chat', json={'text': 'Hi'})
        self.assertEqual(response.status_code, 200)
        self.assertIn('response', response.json)
