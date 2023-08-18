<template>
    <div class="footer">
        <div class="container">
    <div class="row justify-content-center">
        <div class="col-sm-4 col-md-3 item">
            <h3>Services</h3>
            <br>
            <ul>
                <li><a href="./index.html">Products</a></li><br>
                <li><a href="./html/test.html">Help</a></li><br>
                <li><a href="./html/help.html">Contact</a></li>
            </ul>
        </div>
        <div class="col-sm-4 col-md-3 item">
            <h3>About</h3>
            <br>
            <ul>
                <li><a href="#">Company</a></li><br>
                <li><a href="#">Team</a></li>
            </ul>
        </div>
        <div class="col-sm-4 col-md-3 item">
            <h3>Contact Us</h3>
            <ul>
                <li>Address: <br>
                  413 Triangle lane <br>
                  Cape Town <br>
                  7764
                </li><br>
                <li>Phone number: 065 970 1470</li><br>
                <li>Email: ganiefahmajiet3@gmail.com</li>
            </ul>
        </div>
        <div class="copyright">
            <p class="copyright">Ganiefah Majiet © 2023</p>
        </div>
    </div>
</div>

    </div>
        
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.footer {
    padding:50px 0;
    background-color:#FFE2E2 !important;
    color:black !important;
  }
  
  .footer h3 {
    margin-top:0;
    margin-bottom:12px;
    font-weight:bold;
    font-size:16px;
  }
  
  .footer ul {
    padding:0;
    list-style:none;
    line-height:1.6;
    font-size:14px;
    margin-bottom:0;
  }
  
  .footer ul a {
    color: black !important;
    text-decoration:none;
    opacity:0.8;
  }
  
  .footer ul a:hover {
    opacity:1;
    color: #FFC7C7 !important;
  }
  
  .copyright {
    color: black !important;
    margin-top:2rem;
    margin-bottom:0;
    font-size:13px;
    display: inline-flex !important;
    justify-content: center !important;
    align-items: center !important;
    text-align: center !important;
  }
  
</style>