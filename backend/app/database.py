from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Example of a result model
class MedicalAnalysis(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_input = db.Column(db.String(255))
    result = db.Column(db.String(255))
    precautions = db.Column(db.String(255))

    def __repr__(self):
        return f"<MedicalAnalysis {self.result}>"
