from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Sample user data for login authentication
users = {
    "admin": "password123",
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login')
def login_page():
    return render_template('login.html')

@app.route('/home')
def home_page():
    return render_template('home.html')

@app.route('/employee_management')
def employee_management():
    return render_template('employee_management.html')

@app.route('/manager_management')
def manager_management():
    return render_template('manager_management.html')

@app.route('/employee_availability')
def employee_availability():
    return render_template('employee_availability.html')

@app.route('/assign_work')
def assign_work():
    return render_template('assign_work.html')

# API for login validation
@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if users.get(username) == password:
        return jsonify({'success': True}), 200
    return jsonify({'success': False, 'message': 'Invalid credentials'}), 401

if __name__ == '__main__':
    app.run(debug=True)

