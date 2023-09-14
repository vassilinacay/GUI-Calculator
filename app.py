from flask import Flask, request, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/calculate", methods=["POST"])
def calculate():
    expression = request.form["expression"]
    try:
        result = str(eval(expression))
        return result
    except Exception as e:
        return str(e)

if __name__ == "__main__":
    app.run(debug=True)
