from sys import argv
from os import makedirs
from shutil import copy
from flask import Flask, jsonify, request
from flask_cors import CORS
import urllib.request
app = Flask(__name__)
CORS(app)
# path = argv[1]
# name = argv[2]
# num = int(argv[3])
@app.route('/image-to-asset', methods=['POST'])
def function():
    # data = request.form.to_dict()  # For form data requests
    data = request.get_json()  # For json body
    ## download the image
    name = data['name']
    path = name.split(' ')[0] + "img.jpg"
    print(path, data['image'])
    urllib.request.urlretrieve(data['image'], path)
    print("HELERE")
    print(f"Image downloaded and saved as {path}")

    # print(f'{data["email"]}')
    # name = data['name']
    # path = data['image']
    #
    print(data)
    num = 500
    makedirs(f"asset_{name}")
    copy(path,f"asset_{name}/collection.jpeg")

    with open(f'asset_{name}/collection.json', 'w') as file:
        file.write(f"""{{
        "name": "{name}",
        "description": "{name}s ticket.",
        "image": "",
        "external_url": "https://your_project_url.io"
    }}""")
    makedirs(f"asset_{name}/images")
    makedirs(f"asset_{name}/metadata")

    for i in range(1, num + 1):
        with open(f'asset_{name}/metadata/{i}.json', 'w') as file:
            file.write(f"""{{
        "description": "ticket collection",
        "image": "",
        "name": "Ticket #{i}",
        "external_url": "https://your_project_url.io/1",
        "attributes": [
        {{
            "trait_type": "Ticket",
            "value": "1"
        }}]
    }}""")
        copy(path,f"asset_{name}/images/{i}.jpeg")
    print("done!")
    return jsonify({"message": "Item deleted"}), 200


if __name__ == '__main__':
    app.run(debug=True)