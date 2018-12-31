// Hide Whatsapp status button
function isWhatsappWeb() {
    return location.href.indexOf('whatsapp.com') !== -1;
}

function dismissWhatsappStatusButton() {
    const statusButton = document.querySelector('div[title="Status"]');
    if (statusButton !== null) {
        statusButton.style.visibility = 'hidden';
    } else {
        setTimeout(dismissWhatsappStatusButton, 3000);
    }
}

if (isWhatsappWeb()) {
    dismissWhatsappStatusButton();
}

// Block email as it is bad
function isBlockedSite() {
    const blockedSites = [
        'outlook.com',
        'correo.uniandes.edu.co',
        'outlook.office.com',
        'outlook.live.com',
        'youtube.com'
    ];

    for (let i = 0; i < blockedSites.length; ++i) {
        if (location.href.indexOf(blockedSites[i]) !== -1) {
            return true;
        }
    }
    return false;
}

if (isBlockedSite()) {
    const warningScreenHTML = `
    <!--BEGIN_DISTRACT_CODE-->
    <style>
    #distract-div {
        background-color: tomato;
        z-index: 2000000000;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    #distract-div .distract-text {
        width: 100%;
        text-align: center;
        margin: auto;
    }

    #distract-div h1 {
        padding-top: 30%;
        font-size: 3em;
        font-family: monospace;
        color: white;
    }
    </style>
    <div id="distract-div">
        <h1 class="distract-text">Do not distract!</h1>
    </div>
    <!--END_DISTRACT_CODE-->`
    document.documentElement.innerHTML = warningScreenHTML;
}