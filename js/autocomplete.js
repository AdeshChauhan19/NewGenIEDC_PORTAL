$(function () {
  var participant = [
    { value: 'Uday Bhanu | IEDC-CS1 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS1.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS1.jpg">Download</a>'},

  { value: 'ANUSHKA SAXENA | IEDC-CS2 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS2.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS2.jpg">Download</a>'},

  { value: 'Anuj Ruhela | IEDC-CS3 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS3.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS3.jpg">Download</a>'},

{ value: 'GLA University | IEDC-CS4 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS4.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS4.jpg">Download</a>'},

{ value: 'ABHISHEK KUMAR SINGH | IEDC-CS5 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS5.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS5.jpg">Download</a>'},

{ value: 'Aryan Upadhyay | IEDC-CS6 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS6.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS6.jpg">Download</a>'},

{ value: 'Mohan Agrawal | IEDC-CS7 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS7.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS7.jpg">Download</a>'},

{ value: 'Yashikakevlani kevlani | IEDC-CS8 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS8.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS8.jpg">Download</a>'},

{ value: 'Shailesh Singh | IEDC-CS9 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS9.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS9.jpg">Download</a>'},

{ value: 'Shubhi trivedi | IEDC-CS10 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS10.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS10.jpg">Download</a>'},

{ value: 'Satyansh Prakash | IEDC-CS11 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS11.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS11.jpg">Download</a>'},

{ value: 'Harsh Agnihotri | IEDC-CS12 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS12.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS12.jpg">Download</a>'},

{ value: 'Gurleen Singh | IEDC-CS13 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS13.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS13.jpg">Download</a>'},

{ value: 'Shruti Goyal | IEDC-CS14 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS14.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS14.jpg">Download</a>'},

{ value: 'DIVYANSHI AGRAWAL | IEDC-CS15 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS15.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS15.jpg">Download</a>'},

{ value: 'Shalini Kumari | IEDC-CS16 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS16.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS16.jpg">Download</a>'},

{ value: 'Anshika Sachdeva | IEDC-CS17 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS17.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS17.jpg">Download</a>'},

{ value: 'Muskan Kumari | IEDC-CS18 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS18.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS18.jpg">Download</a>'},

{ value: 'Paavak Bansal | IEDC-CS19 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS19.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS19.jpg">Download</a>'},

{ value: 'HARSHITA SINGH | IEDC-CS20 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS20.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS20.jpg">Download</a>'},

{ value: 'Sachin | IEDC-CS21 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS21.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS21.jpg">Download</a>'},

{ value: 'Pritesh Parida | IEDC-CS22 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS22.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS22.jpg">Download</a>'},

{ value: 'Kanishk Sharma | IEDC-CS23 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS23.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS23.jpg">Download</a>'},

{ value: 'Anusha Tripathi | IEDC-CS24 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS24.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS24.jpg">Download</a>'},

{ value: 'Anshika | IEDC-CS25 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS25.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS25.jpg">Download</a>'},

{ value: 'Santosh Kumar Morya | IEDC-CS26 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS26.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS26.jpg">Download</a>'},

{ value: 'Ashish Singh | IEDC-CS27 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS27.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS27.jpg">Download</a>'},

{ value: 'B Kiran | IEDC-CS28 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS28.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS28.jpg">Download</a>'},

{ value: 'Abhigyaan Pandey | IEDC-CS29 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS29.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS29.jpg">Download</a>'},

{ value: 'Ankit kumar | IEDC-CS30 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS30.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS30.jpg">Download</a>'},

{ value: 'Pop Singh | IEDC-CS31 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS31.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS31.jpg">Download</a>'},

{ value: 'Aviral | IEDC-CS32 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS32.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS32.jpg">Download</a>'},

{ value: 'Yashank Tiwari | IEDC-CS33 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS33.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS33.jpg">Download</a>'},

{ value: 'JITENDRA KUMAR | IEDC-CS34 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS34.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS34.jpg">Download</a>'},

{ value: 'Bittu Kumar Mandal | IEDC-CS35 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS35.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS35.jpg">Download</a>'},

{ value: 'Abhishek Chaudhary | IEDC-CS36 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS36.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS36.jpg">Download</a>'},

{ value: 'Sakshi Pandey | IEDC-CS37 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS37.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS37.jpg">Download</a>'},

{ value: 'Dell | IEDC-CS38 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS38.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS38.jpg">Download</a>'},

{ value: 'RAMAKANT Gla | IEDC-CS39 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS39.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS39.jpg">Download</a>'},

{ value: 'Raghav | IEDC-CS40 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS40.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS40.jpg">Download</a>'},

{ value: 'Abhishek Jain | IEDC-CS41 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS41.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS41.jpg">Download</a>'},

{ value: 'ANKIT KOHLI | IEDC-CS42 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS42.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS42.jpg">Download</a>'},

{ value: 'AJAY PAL | IEDC-CS43 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS43.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS43.jpg">Download</a>'},

{ value: 'Gary Malik | IEDC-CS44 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS44.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS44.jpg">Download</a>'},

{ value: 'Ishu mishra | IEDC-CS45 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS45.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS45.jpg">Download</a>'},

{ value: 'Devesh Kumar | IEDC-CS46 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS46.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS46.jpg">Download</a>'},

{ value: 'Lokesh Kumar | IEDC-CS47 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS47.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS47.jpg">Download</a>'},

{ value: 'Chirag Chauhan | IEDC-CS48 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS48.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS48.jpg">Download</a>'},

{ value: 'Vineet Kumar | IEDC-CS49 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS49.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS49.jpg">Download</a>'},

{ value: 'Pramod Joshi | IEDC-CS50 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS50.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS50.jpg">Download</a>'},

{ value: 'Priyanshu Varshney | IEDC-CS51 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS51.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS51.jpg">Download</a>'},

{ value: 'Monishka Singh | IEDC-CS52 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS52.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS52.jpg">Download</a>'},

{ value: 'Sagar Garg | IEDC-CS53 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS53.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS53.jpg">Download</a>'},

{ value: 'Abhishek Bansal | IEDC-CS54 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS54.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS54.jpg">Download</a>'},

{ value: 'Rishabh Bhardwaj | IEDC-CS55 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS55.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS55.jpg">Download</a>'},

{ value: 'Manoj K | IEDC-CS56 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS56.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS56.jpg">Download</a>'},

{ value: 'KM POOJA | IEDC-CS57 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS57.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS57.jpg">Download</a>'},

{ value: 'Krishan kumar Saraswat | IEDC-CS58 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS58.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS58.jpg">Download</a>'},

{ value: 'Himanshu Upmanyu | IEDC-CS59 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS59.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS59.jpg">Download</a>'},

{ value: 'ASHOK KUMAR | IEDC-CS60 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS60.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS60.jpg">Download</a>'},

{ value: 'Yash kumar singh | IEDC-CS61 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS61.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS61.jpg">Download</a>'},

{ value: 'Shubhi Sharma | IEDC-CS62 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS62.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS62.jpg">Download</a>'},

{ value: 'Shubham Singh | IEDC-CS63 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS63.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS63.jpg">Download</a>'},

{ value: 'Ananya Tripathi | IEDC-CS64 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS64.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS64.jpg">Download</a>'},

{ value: 'Deevansh Katare | IEDC-CS65 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS65.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS65.jpg">Download</a>'},

{ value: 'Priyanka Pundhir | IEDC-CS66 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS66.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS66.jpg">Download</a>'},

{ value: 'Manik Singh | IEDC-CS67 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS67.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS67.jpg">Download</a>'},

{ value: 'Nishita Garg | IEDC-CS68 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS68.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS68.jpg">Download</a>'},

{ value: 'Saurabh Kumar | IEDC-CS69 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS69.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS69.jpg">Download</a>'},

{ value: 'Sanchit Ahuja | IEDC-CS70 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS70.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS70.jpg">Download</a>'},

{ value: 'KUSH MISHRA | IEDC-CS71 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS71.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS71.jpg">Download</a>'},

{ value: 'Naman Joshi | IEDC-CS72 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS72.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS72.jpg">Download</a>'},

{ value: 'vk | IEDC-CS73 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS73.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS73.jpg">Download</a>'},

{ value: 'Pranjal Gupta | IEDC-CS74 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS74.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS74.jpg">Download</a>'},

{ value: 'Shubham Pandey | IEDC-CS75 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS75.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS75.jpg">Download</a>'},

{ value: 'KANHAIYA PANDEY | IEDC-CS76 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS76.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS76.jpg">Download</a>'},

{ value: 'NIKHIL MANJHI | IEDC-CS77 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS77.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS77.jpg">Download</a>'},

{ value: 'Ruchi Chauhan | IEDC-CS78 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS78.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS78.jpg">Download</a>'},

{ value: 'Agam Kumar Gupta | IEDC-CS79 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS79.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS79.jpg">Download</a>'},

{ value: 'Ankit Sharma | IEDC-CS80 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS80.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS80.jpg">Download</a>'},

{ value: 'Manoj Kumar | IEDC-CS81 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS81.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS81.jpg">Download</a>'},

{ value: 'Prakal Goyal | IEDC-CS82 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS82.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS82.jpg">Download</a>'},

{ value: 'Anshika Garg | IEDC-CS83 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS83.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS83.jpg">Download</a>'},

{ value: 'Vaibhav Varshney | IEDC-CS84 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS84.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS84.jpg">Download</a>'},

{ value: 'Sumit Kumar Sharma | IEDC-CS85 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS85.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS85.jpg">Download</a>'},

{ value: 'Galaxy S8+ | IEDC-CS86 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS86.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS86.jpg">Download</a>'},

{ value: 'Riya Singh | IEDC-CS87 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS87.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS87.jpg">Download</a>'},

{ value: 'Mausam Gupta | IEDC-CS88 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS88.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS88.jpg">Download</a>'},

{ value: 'Abhishek Choubey | IEDC-CS89 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS89.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS89.jpg">Download</a>'},

{ value: 'Mi phone | IEDC-CS90 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS90.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS90.jpg">Download</a>'},

{ value: 'PRIYA AGRAWAL | IEDC-CS91 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS91.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS91.jpg">Download</a>'},

{ value: 'Parul Sen | IEDC-CS92 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS92.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS92.jpg">Download</a>'},

{ value: 'Kartik Gupta | IEDC-CS93 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS93.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS93.jpg">Download</a>'},

{ value: 'Deepansh Agarwal | IEDC-CS94 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS94.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS94.jpg">Download</a>'},

{ value: 'Nikunj | IEDC-CS95 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS95.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS95.jpg">Download</a>'},

{ value: 'Vaibhav Garg | IEDC-CS96 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS96.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS96.jpg">Download</a>'},

{ value: 'Agam Kumar Gupta | IEDC-CS97 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS97.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS97.jpg">Download</a>'},

{ value: 'Abhinav | IEDC-CS98 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS98.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS98.jpg">Download</a>'},

{ value: 'Priya Rawat | IEDC-CS99 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS99.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS99.jpg">Download</a>'},

{ value: 'Vansh Saxena | IEDC-CS100 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS100.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS100.jpg">Download</a>'},

{ value: 'Megha Goyal | IEDC-CS101 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS101.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS101.jpg">Download</a>'},

{ value: 'Saurabh G | IEDC-CS102 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS102.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS102.jpg">Download</a>'},

{ value: 'MANJIT KUMAR SINGH | IEDC-CS103 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS103.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS103.jpg">Download</a>'},

{ value: 'Udit Kumar | IEDC-CS104 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS104.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS104.jpg">Download</a>'},

{ value: 'bb3ae6d1 | IEDC-CS105 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS105.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS105.jpg">Download</a>'},

{ value: 'Bharat Sharma | IEDC-CS106 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS106.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS106.jpg">Download</a>'},

{ value: 'Shyamji Gupta | IEDC-CS107 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS107.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS107.jpg">Download</a>'},

{ value: 'Ankit Sharma | IEDC-CS108 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS108.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS108.jpg">Download</a>'},

{ value: 'Akshat Lalwani | IEDC-CS109 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS109.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS109.jpg">Download</a>'},

{ value: 'Saurabh Ganguly | IEDC-CS110 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS110.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS110.jpg">Download</a>'},

{ value: 'Saurabh Pathak | IEDC-CS111 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS111.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS111.jpg">Download</a>'},

{ value: 'Yash Nigam | IEDC-CS112 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS112.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS112.jpg">Download</a>'},

{ value: 'Vashu Jadon | IEDC-CS113 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS113.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS113.jpg">Download</a>'},

{ value: 'Meghna Yadav | IEDC-CS114 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS114.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS114.jpg">Download</a>'},

{ value: 'Vishal Kumar Singh | IEDC-CS115 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS115.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS115.jpg">Download</a>'},

{ value: 'Abhishek | IEDC-CS116 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS116.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS116.jpg">Download</a>'},

{ value: 'SHRESTH AGARWAL | IEDC-CS117 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS117.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS117.jpg">Download</a>'},

{ value: 'Sachin Rai | IEDC-CS118 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS118.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS118.jpg">Download</a>'},

{ value: 'Geetesh Arora | IEDC-CS119 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS119.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS119.jpg">Download</a>'},

{ value: 'Nidish Gogia | IEDC-CS120 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS120.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS120.jpg">Download</a>'},

{ value: 'Yash Gupta . | IEDC-CS121 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS121.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS121.jpg">Download</a>'},

{ value: 'Vishal Srivastava | IEDC-CS122 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS122.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS122.jpg">Download</a>'},

{ value: 'Gaurav Sharma | IEDC-CS123 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS123.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS123.jpg">Download</a>'},

{ value: 'Rahul | IEDC-CS124 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS124.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS124.jpg">Download</a>'},

{ value: 'Ashutosh Kumar | IEDC-CS125 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS125.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS125.jpg">Download</a>'},

{ value: 'Raj Sinha | IEDC-CS126 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS126.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS126.jpg">Download</a>'},

{ value: 'Naman Saini | IEDC-CS127 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS127.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS127.jpg">Download</a>'},

{ value: 'Himanshu Kushwaha | IEDC-CS128 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS128.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS128.jpg">Download</a>'},

{ value: 'Krishna Kant Dubey | IEDC-CS129 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS129.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS129.jpg">Download</a>'},

{ value: 'Shubham Saraswat | IEDC-CS130 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS130.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS130.jpg">Download</a>'},

{ value: 'Tushar Thakur | IEDC-CS131 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS131.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS131.jpg">Download</a>'},

{ value: 'Yash Gupta | IEDC-CS132 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS132.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS132.jpg">Download</a>'},

{ value: 'Satyam Tiwari | IEDC-CS133 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS133.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS133.jpg">Download</a>'},

{ value: 'Nitil kumar | IEDC-CS134 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS134.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS134.jpg">Download</a>'},

{ value: 'Juhi Gogia | IEDC-CS135 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS135.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS135.jpg">Download</a>'},

{ value: 'Kautuk Gupta | IEDC-CS136 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS136.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS136.jpg">Download</a>'},

{ value: 'ARIF AFZAL | IEDC-CS137 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS137.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS137.jpg">Download</a>'},

{ value: 'Jitendra Sharma | IEDC-CS138 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS138.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS138.jpg">Download</a>'},

{ value: 'Ashu Sharma | IEDC-CS139 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS139.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS139.jpg">Download</a>'},

{ value: 'Shaswat Singh | IEDC-CS140 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS140.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS140.jpg">Download</a>'},

{ value: 'RATAN Dubey | IEDC-CS141 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS141.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS141.jpg">Download</a>'},

{ value: 'Sachin Kumar Singh | IEDC-CS142 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS142.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS142.jpg">Download</a>'},

{ value: 'Prajjwal Srivastava | IEDC-CS143 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS143.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS143.jpg">Download</a>'},

{ value: 'Karanveer Gupta | IEDC-CS144 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS144.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS144.jpg">Download</a>'},

{ value: 'Ashima Ahuja | IEDC-CS145 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS145.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS145.jpg">Download</a>'},

{ value: 'TISHA AGARWAL | IEDC-CS146 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS146.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS146.jpg">Download</a>'},

{ value: 'Yash Gangwar | IEDC-CS147 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS147.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS147.jpg">Download</a>'},

{ value: 'Nipurn Singh | IEDC-CS148 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS148.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS148.jpg">Download</a>'},

{ value: 'HARSH VARDHAN GUPTA | IEDC-CS149 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS149.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS149.jpg">Download</a>'},

{ value: 'Manpreet kaur | IEDC-CS150 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS150.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS150.jpg">Download</a>'},

{ value: 'Suyash Srivastava | IEDC-CS151 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS151.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS151.jpg">Download</a>'},

{ value: 'Jay Kattyayan | IEDC-CS152 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS152.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS152.jpg">Download</a>'},

{ value: 'NITIN CHANDOK | IEDC-CS153 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS153.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS153.jpg">Download</a>'},

{ value: 'Mitanshi Agrawal | IEDC-CS154 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS154.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS154.jpg">Download</a>'},

{ value: 'Ayush Tiwari | IEDC-CS155 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS155.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS155.jpg">Download</a>'},

{ value: 'Harshita Saraswat | IEDC-CS156 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS156.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS156.jpg">Download</a>'},

{ value: 'Aryan Dubey | IEDC-CS157 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS157.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS157.jpg">Download</a>'},

{ value: 'Chetanya Goyal | IEDC-CS158 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS158.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS158.jpg">Download</a>'},

{ value: 'Sagar Gupta | IEDC-CS159 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS159.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS159.jpg">Download</a>'},

{ value: 'Classroom 28 | IEDC-CS160 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS160.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS160.jpg">Download</a>'},

{ value: 'payal dubey | IEDC-CS161 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS161.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS161.jpg">Download</a>'},

{ value: 'Shiva Pandit | IEDC-CS162 | How to convert idea into StartUp', data: '<a href="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS162.jpg" target="_blank" download="https://ecell-contractor.s3.us-east-2.amazonaws.com/IEDC_CERTIFICATE/IEDC-CS162.jpg">Download</a>'}
];

  // setup autocomplete function pulling from participant[] array
  $('#autocomplete').autocomplete({
    lookup: participant,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Participant Name (email):</strong> ' + suggestion.value + ' <br> <strong>Link:</strong> ' + suggestion.data;
      $('#outputcontent').html(thehtml);
    }
  });


});
