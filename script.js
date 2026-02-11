const profile_account = JSON.parse(localStorage.getItem('profile_account')) || [];


const content = document.querySelector('.js_Home')

  // ADD PROFILE
const add = document.querySelector('.js_addProfile');
add.addEventListener('click', function () {
    content.classList.add('blur')
  createProfile()
});

//    VIEW PROFILE
const view = document.querySelector('.js_viewProfile');
view.addEventListener('click', function () {
  content.classList.add('blur')
  viewProfile()
})


    

    // VIEW PROFILE FUNCTION
        
function viewProfile() {
    if (!popRendering) {
    const viewprompt = document.createElement('div')
  viewprompt.classList.add('viewSpace')
  
  // the exit viewPrompt button 
  const exitView = document.createElement('button')
   exitView.classList.add('exitSeePrompt')

    exitView.style.backgroundImage = 'url("exit.png")'
    exitView.style.backgroundSize = 'cover';
    exitView.style.backgroundPosition = 'center';
    exitView.style.backgroundRepeat = 'no-repeat';

  exitView.addEventListener('click', function () {
    console.log('it exits')
    viewprompt.classList.add('closeView');

    content.classList.remove('blur') // remove blur effect
    
    popRendering = false

    exitView.addEventListener('transitionend', function () {
      exitView.remove();
      
    }, { once: true }) 
  })

  const user_name = document.createElement('input')
  user_name.placeholder = 'enter username'
  user_name.classList.add('name')
  viewprompt.appendChild(user_name)

  const password = document.createElement('input')
  password.placeholder = 'enter password'
  password.classList.add('user_password')
  viewprompt.appendChild(password)

  const viewProfile = document.createElement('button')
  viewProfile.textContent = 'view profile'
  viewProfile.classList.add('viewIt')
  viewprompt.appendChild(viewProfile)
  viewProfile.addEventListener('click', function () {
    console.log(profile_account)
      if (user_name.value === '' || password.value === '') {
        alertNotification(viewprompt, 'enter valid usaname and password')
      }
      else {
        ViewFunction()
      }
  }) 

    function ViewFunction() {
        let found = false
      
           for (let i = 0; i < profile_account.length; i++ ) {
  if (profile_account[i].access_name === user_name.value && 
      profile_account[i].passkey === password.value
  ) {

      found = true
    console.log(profile_account[i])

    viewProfile.textContent = 'processing...'
    setTimeout(function () {

      viewprompt.remove()

      const finalView = document.createElement('div')
      finalView.classList.add('final_view')

      document.body.appendChild(finalView)
      content.classList.add('blur')
      finalView.getBoundingClientRect()
      finalView.classList.add('open_finalView')

      const acc_pic = document.createElement('div')
      acc_pic.classList.add('userPic')
      acc_pic.style.backgroundImage = 'url("user4.png")'
      acc_pic.style.backgroundSize = 'cover';
      acc_pic.style.backgroundPosition = 'center';
      acc_pic.style.backgroundRepeat = 'no-repeat';
      finalView.appendChild(acc_pic)

      const display = document.createElement('div')
      display.classList.add('viewdisplay')
      finalView.appendChild(display)

          // the "about" text
          const aboutText = document.createElement('p');
          aboutText.style.fontFamily = 'Arial, sans-serif';
          aboutText.style.fontSize = '1rem';
          aboutText.style.color = '#040a10ff';
          aboutText.style.padding = '0.5rem';
          aboutText.style.lineHeight = '1.3rem';

          aboutText.textContent = profile_account[i].about;

          display.appendChild(aboutText);


      const display2 = document.createElement('div')
      display2.classList.add('displayT')
      finalView.appendChild(display2)

      const profile = profile_account[i] 

      for (let key in profile) {
        if (key === 'passkey' || key === 'access_name' || key === 'about') continue

        const info = document.createElement('p')
        info.style.margin = '0.3rem 0'
        info.style.fontFamily = 'Arial, sans-serif'
        info.style.fontSize = '0.9rem'
        info.style.color = '#050506ff'

        info.innerHTML = `<strong>${key.replace('_', ' ').toUpperCase()}:</strong> ${profile[key]}`

        display2.appendChild(info)
      }

      const lastIntro = document.createElement('h1')
      lastIntro.classList.add('last_intro')
      lastIntro.textContent = 'who you are';
      finalView.appendChild(lastIntro)

      const logout = document.createElement('button');
      logout.classList.add('log_out');
      logout.textContent = 'log out';

      const icon = document.createElement('span');
      icon.classList.add('icon');
      const img = document.createElement('img');
      img.src = 'logOut.png'; 
      img.alt = 'icon';
      img.style.width = '1.1em';
      img.style.height = '1.1em';
      icon.appendChild(img);

      logout.appendChild(icon);
      finalView.appendChild(logout);

      logout.addEventListener('click', function () {
        finalView.remove()
        alertNotification(content, 'Log Out success!!')
        content.classList.remove('blur')
        popRendering = false
      })

    }, 1800)

    break 
  }
 
  
}
      if (!found) {
    alertNotification(viewprompt, 'enter valid username and password')
  }
}

    

  const viewpromptIntro = document.createElement('h1')
  viewpromptIntro.classList.add('viewpromptHeading')
  viewpromptIntro.innerHTML = `ProfiBank <img src="profi.png" 
  class="viewpromptLogo">`;
  viewprompt.appendChild(viewpromptIntro)

  popRendering = true
  document.body.appendChild(viewprompt)
  viewprompt.appendChild(exitView)

  viewprompt.getBoundingClientRect();
  viewprompt.classList.add('openView');
} 

}




// ADD PROFILE FUNCTION
 let popRendering = false;
const createPrompt = document.createElement('div');

function createProfile() {
  if (!popRendering) {
 console.log('hello');

   const createPrompt = document.createElement('div');
  createPrompt.classList.add('createSpace');
  

  const promptIntro = document.createElement('h1')
  promptIntro.classList.add('promptHeading')
  promptIntro.innerHTML = `ProfiBank <img src="profi.png" 
  class="promptLogo">`;


 const maidenName = document.createElement('input');
  maidenName.classList.add('name_one')
  maidenName.placeholder = "first name";

 const lastName = document.createElement('input');
  lastName.classList.add('name_two')
  lastName.placeholder = "last name";

  const DOB = document.createElement("input");
  DOB.type = "date";
    DOB.classList.add('Birth')

  const contactEmail = document.createElement('input')
  contactEmail.classList.add('email')
   contactEmail.placeholder = 'email';


  const contactNum = document.createElement('input')
  contactNum.classList.add('Num')
  contactNum.placeholder = '# number'
  contactNum.maxLength = 12;

  const job = document.createElement('input')
  job.classList.add('user_job')
  job.placeholder = "occupation"

  const AboutSelf = document.createElement('textarea')
  AboutSelf.classList.add('user_self')
  AboutSelf.placeholder = 'about self'
  AboutSelf.maxLength = 600;

  const createNow = document.createElement('button')
  createNow.classList.add('create')
  createNow.textContent = 'PROCEED'
  createNow.addEventListener('click', function () {
      createNowFunc()
  })
     

      // exit button
    const exit = document.createElement('button')
    exit.classList.add('exitPrompt') 
    
    exit.style.backgroundImage = 'url("exit.png")'
    exit.style.backgroundSize = 'cover';
    exit.style.backgroundPosition = 'center';
    exit.style.backgroundRepeat = 'no-repeat';

      // APPENDCHILDS
  document.body.appendChild(createPrompt);
  createPrompt.append(
  exit,
  maidenName,
  lastName,
  DOB,
  contactEmail,
  contactNum,
  job,
  AboutSelf,
  createNow,
  promptIntro );


  popRendering = true

  createPrompt.getBoundingClientRect();
  createPrompt.classList.add('open');


  exit.addEventListener('click', function () {
    console.log('it exits')
    createPrompt.classList.add('close');
    content.classList.remove('blur') // remove blur effect
    
    popRendering = false

    createPrompt.addEventListener('transitionend', function () {
      createPrompt.remove();
      
    }, { once: true })
  })

     function createNowFunc() {
          if (
        maidenName.value !== '' && lastName.value !== '' &&
        contactNum.value !== '' && contactEmail.value !== '' &&
        DOB.value !== '' && job.value !== '' && AboutSelf
        .value !== ''
      ) {
        profile_account.push({
        first_name: maidenName.value.toLowerCase(),
        last_name: lastName.value.toLowerCase(),
        phone_number: contactNum.value,
        email: contactEmail.value.toLowerCase(),
        birth_year: DOB.value,
        occupation: job.value.toLowerCase(),
        about: AboutSelf.value.toLowerCase(),
        access_name: "",
        passkey: ""
});   
localStorage.setItem('profile_account', JSON.stringify(profile_account));

      createPrompt.remove() // remove the promt
      content.classList.remove('blur')
      popRendering = false

      setTimeout(function () {

        const security = document.createElement('div')
      security.classList.add('security_prompt')


      document.body.appendChild(security)
      content.classList.add('blur')
      security.getBoundingClientRect()
      security.classList.add('open_security')

      const securityIntro = document.createElement('h1')
      securityIntro.classList.add('security_intro')
      securityIntro.textContent = 'last step'
      security.appendChild(securityIntro)

      const make_username = document.createElement('input')
      make_username.classList.add('makeUsername')
      make_username.placeholder = 'create username'
      security.appendChild(make_username)

      const make_password = document.createElement('input')
      make_password.classList.add('makePassword')
      make_password.placeholder = 'create password'
      security.appendChild(make_password)

      const finallycreate = document.createElement('button')
      finallycreate.classList.add('final_create')
      finallycreate.textContent = 'create now'
      security.appendChild(finallycreate)
       finallycreate.addEventListener('click', function () {
          if (make_password.value.length < 4) {
           make_password.placeholder = 'weak password';
           make_password.classList.add('check_key')
          }
          else {
           let p = profile_account.at(-1);
        p.access_name = make_username.value;
        p.passkey  = make_password.value;
        localStorage.setItem("profile_account", JSON.stringify(profile_account));

            finallycreate.textContent = 'creating...'
      setTimeout(function () {
      security.remove() // remove the promt
      content.classList.remove('blur')
      popRendering = false
       alertNotification(content, 'Profile created Successfully')
      }, 2500)
          }
       })
      
      const goback = document.createElement('button')
      goback.classList.add('go_back')
      goback.style.backgroundImage = 'url("exit.png")'
      goback.style.backgroundSize = 'cover';
      goback.style.backgroundPosition = 'center';
      goback.style.backgroundRepeat = 'no-repeat';
      security.appendChild(goback)
      goback.addEventListener('click', function () {
        content.classList.add('blur');
        alertNotification(security, 'refresh to void progress')
      })

      }, 1800)
      


      
      
      } 
      else {
       alertNotification(createPrompt, 'Please fill every query \nTo Proceed')
      }
      
      }
  }


}

  
function alertNotification(Prompt, message) {
    const alertBox = document.getElementById('fakeAlert');
        alertBox.textContent = message;
        alertBox.classList.remove('hide', 'hidden');
        alertBox.classList.add('show');
        Prompt.classList.add('blurr');

        setTimeout(function() {
      alertBox.classList.remove('show');
      alertBox.classList.add('hide');

      // remove blurr 
      setTimeout(function() {
        Prompt.classList.remove('blurr');
        alertBox.classList.add('hidden');
      }, 160);
    }, 2000);

} 