# Akshay App

Akshay App is a medical healthcare application designed to assist users by analyzing images of injuries or conditions, providing basic first-aid solutions, and answering health-related queries via a chatbot. The app uses machine learning models for image analysis and conversational AI for the chatbot. The project is still in development, with improvements to the image analysis model's efficiency currently in progress.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Image Analysis**: Identifies on-site problems from uploaded images and provides basic first-aid suggestions.
- **Chatbot**: Answers user queries and provides medical advice or information.
- The current version has the image analysis model implemented but needs further optimization for better accuracy.

## Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/Eminence-bit/Akshay-app.git
    cd Akshay-app
    ```

2. Navigate to the project folder and install the necessary dependencies:
    ```bash
    cd frontend  
    npm install
    ```

3. Start the app using Expo:
    ```bash
    npx expo start
    ```

4. Navigate to the backend directory and set up the Flask server:
    ```bash
    cd backend
    pip install -r requirements.txt
    ```

5. Run the Flask server:
    ```bash
    flask run
    ```

## Usage

- The app allows users to upload images of their injury or condition, and it provides basic first aid solutions based on the analysis.
- The chatbot is designed to answer health-related queries but is still under development.
- Note: The current image analysis model may not be highly accurate and is being optimized.

## Technologies Used

- **React Native**: Frontend framework for building the mobile app.
- **Python (Flask)**: Backend server and API for running the machine learning model and chatbot.
- **TensorFlow**: Library used for training the machine learning models.
- **Kaggle Datasets**: Data source for training the models.
- **Expo**: Development environment and toolchain for React Native.

## Contributing

This project is open to contributions! If you have suggestions for improving the model or the app, feel free to fork the repository, make changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

