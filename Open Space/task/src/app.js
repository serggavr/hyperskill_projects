window.onload=function() {
    let passwordInputPlace = document.querySelector('.password-input');
    const passwordInputButton = document.querySelector('.password-button');
    const launchButton = document.querySelector('.launch-button')
    const rocket = document.querySelector('.rocket')
    let checkButtons = document.querySelectorAll('.check-buttons-checkbox');
    let rangeLevers = document.querySelectorAll('.levers-range');

    passwordInputButton.addEventListener('click', checkPassword);
    launchButton.addEventListener('click', rocketStart)

    checkButtons.forEach((element) => {
        element.addEventListener('change', checkButtonsAndLeversStatus)
    })
    rangeLevers.forEach((element) => {
        element.addEventListener('change', checkButtonsAndLeversStatus)
    })


    function checkPassword() {
        passwordInputPlace.value === 'TrustNo1' ? passwordInputEnable(): passwordInputDisable();
    }

    function passwordInputDisable() {
        checkButtons.forEach((element) => {
            element.setAttribute('disabled','disabled')
        })
        rangeLevers.forEach((element) => {
            element.setAttribute('disabled', 'disabled')
        })
        launchButton.setAttribute('disabled', 'disabled')
    }

    function passwordInputEnable() {
        checkButtons.forEach((element) => {
            element.removeAttribute('disabled')
        })
        rangeLevers.forEach((element) => {
            element.removeAttribute('disabled')
        })

        passwordInputPlace.setAttribute('disabled', 'disabled')
        passwordInputButton.setAttribute('disabled', 'disabled')
    }

    function checkButtonsAndLeversStatus() {
        if (checkButtonsChecked() && checkLeversValue()) {
            launchButton.removeAttribute('disabled')
        }
    }

    function checkButtonsChecked() {
        for (let i = 0; i < checkButtons.length; i++) {
            if(!checkButtons[i].checked) {
                return false
            }
            if(i === checkButtons.length - 1) {
                return true
            }
        }
    }

    function checkLeversValue() {
        for (let i = 0; i < rangeLevers.length; i++) {
            if ( !(rangeLevers[i].value === '100') ) {
                return false
            }
            if(i === rangeLevers.length - 1) {
                return true
            }
        }
    }

    function rocketStart() {
        // rocket.classList.add('.rocket_start');
        rocket.style.animationPlayState = 'running';
        console.log('GO!')
    }


    passwordInputDisable()

    // function testPass14() {
    //     let inputs = document.querySelectorAll('input');
    //     for (let item of inputs) {
    //         item.onchange = function () {
    //             console.log('HAhA pass the test No14');
    //         }
    //     }
    // }
    // testPass14();
}
