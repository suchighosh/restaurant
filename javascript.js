$('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 1000,
    arrow: true,
});

const email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,})+$/;
const alphabet_regex = /^[A-Za-z ]+$/;

const submitHandler = () => {
    const fname = $('#full-name').val();
    const email = $('#email').val();
    const khana = $('#khana').val();
    const expbox = $('#experience_box').val();

    var validation_flag = false;
    
    if(!email.match(email_regex)){
      alert("Enter valid email");
      validation_flag = false;
    }
    if(!fname.match(alphabet_regex)){
      alert("Enter valid name");
      validation_flag = false;
    }
    if(!khana.match(alphabet_regex)){
      alert("Enter valid khana name");
      validation_flag = false;
    }
    if(!expbox.match(alphabet_regex)){
      alert("Enter valid experience");
      validation_flag = false;
    }
    if(validation_flag){
      document.getElementById("contact_form").submit();
    }
    
}