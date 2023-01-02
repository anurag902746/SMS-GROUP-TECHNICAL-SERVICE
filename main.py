from flask import Flask, render_template, url_for, request
import json

new_app = Flask(__name__)


@new_app.route('/')
def index_page():
    with open('./Data/overview.json') as file1:
        overviewdata = json.load(file1)
    with open('./Data/button.json') as file2:
        buttondata = json.load(file2)
    return render_template('index.html', overviewData=overviewdata, buttonData=buttondata)


@new_app.route('/portalStatus')
def portalStatus_page():
    with open('./Data/PortalStatusMain.json') as file1:
        maindata = json.load(file1)
    with open('./Data/PortalStatusServiceContract.json') as file2:
        servicedata = json.load(file2)
    return render_template('portalStatus.html', mainData=maindata, serviceData=servicedata)


@new_app.route('/JSW(Tor)', methods=['GET', 'POST'])
def serviceContractTornagallu():
    with open('./Data/option.json') as file:
        optiondata = json.load(file)
    if request.method == 'POST':
        userYear = request.form['year-dropdown']
        userLevel = request.form['level-dropdown']
        if (userLevel == "Level_1"):
            userFunction = request.form['function-dropdown']
        elif (userLevel == "Level_2"):
            userFunction = request.form['function-dropdown1']
        elif (userLevel == "TCS_Server"):
            userFunction = request.form['function-dropdown2']
        with open('./Data/JSW(Tor).json') as file:
            casedata = json.load(file)
        caselist = casedata[userYear][userLevel][userFunction]
        return render_template('JSW(Tor).html', optionData=optiondata, testName="hello", caseList=caselist)
    return render_template('JSW(Tor).html', optionData=optiondata, testName="hi")


@new_app.route('/JSPL(Raigarh)', methods=['GET', 'POST'])
def serviceContractRaigarh():
    with open('./Data/option.json') as file:
        optiondata = json.load(file)
    if request.method == 'POST':
        userYear = request.form['year-dropdown']
        userLevel = request.form['level-dropdown']
        if (userLevel == "Level_1"):
            userFunction = request.form['function-dropdown']
        elif (userLevel == "Level_2"):
            userFunction = request.form['function-dropdown1']
        elif (userLevel == "TCS_Server"):
            userFunction = request.form['function-dropdown2']
        with open('./Data/JSPL(Raigarh).json') as file:
            casedata = json.load(file)
        caselist = casedata[userYear][userLevel][userFunction]
        return render_template('JSPL(Raigarh).html', optionData=optiondata, testName="hello", caseList=caselist)
    return render_template('JSPL(Raigarh).html', optionData=optiondata, testName="hi")


@new_app.route('/SAIL(RSP)', methods=['GET', 'POST'])
def serviceContractRSP():
    with open('./Data/option.json') as file:
        optiondata = json.load(file)
    if request.method == 'POST':
        userYear = request.form['year-dropdown']
        userLevel = request.form['level-dropdown']
        if (userLevel == "Level_1"):
            userFunction = request.form['function-dropdown']
        elif (userLevel == "Level_2"):
            userFunction = request.form['function-dropdown1']
        elif (userLevel == "TCS_Server"):
            userFunction = request.form['function-dropdown2']
        with open('./Data/SAIL(RSP).json') as file:
            casedata = json.load(file)
        caselist = casedata[userYear][userLevel][userFunction]
        return render_template('SAIL(RSP).html', optionData=optiondata, testName="hello", caseList=caselist)
    return render_template('SAIL(RSP).html', optionData=optiondata, testName="hi")


@new_app.route('/TATA(Angul)', methods=['GET', 'POST'])
def serviceContractAngul():
    with open('./Data/option.json') as file:
        optiondata = json.load(file)
    if request.method == 'POST':
        userYear = request.form['year-dropdown']
        userLevel = request.form['level-dropdown']
        if (userLevel == "Level_1"):
            userFunction = request.form['function-dropdown']
        elif (userLevel == "Level_2"):
            userFunction = request.form['function-dropdown1']
        elif (userLevel == "TCS_Server"):
            userFunction = request.form['function-dropdown2']
        with open('./Data/TATA(Angul).json') as file:
            casedata = json.load(file)
        caselist = casedata[userYear][userLevel][userFunction]
        return render_template('TATA(Angul).html', optionData=optiondata, testName="hello", caseList=caselist)
    return render_template('TATA(Angul).html', optionData=optiondata, testName="hi")


if (__name__ == "__main__"):
    new_app.run(debug=True)
