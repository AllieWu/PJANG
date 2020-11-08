import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Home from './Home';


render() {
    return(
        <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
      <title>Laundr Website</title>
      <link rel="stylesheet" href="style.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.9/fullpage.min.css" integrity="sha512-8M8By+q+SldLyFJbybaHoAPD6g07xyOcscIOQEypDzBS+sTde5d6mlK2ANIZPnSyxZUqJfCNuaIvjBUi8/RS0w==" crossorigin="anonymous" />
    </head>
    <body>

      <div id="fullPage">

        <div class="section s1">

          <div class="backgroundContainer">
            <div class="freshairBackground"></div>
      </div>
      <div class="freshairHeader">
          
          <h1 class="title">
              Fresh Air Laundr Bombs
          </h1>
          <p class="price">
              $18.99
          </p>
          <button class="button">Add to Cart</button>
      </div>
      <div>
          <img src="detergentImages/freshairMockup.png" alt="freshaireMockup" class="productImage">
          
      </div>
    </div>

    <div class="section s2">
      <div class="backgroundContainer">
        <div class="coffeeBackground"></div>
    </div>
    <div class="coffeeHeader">
        
        <h1 class="title">
            Coffee Vanilla Laundr Bombs
        </h1>
        <p class="price">
            $18.99
        </p>
        <button class="button">Add to Cart</button>
    </div>
    <div>
        <img src="detergentImages/coffeeMockup.png" alt="coffeeMockup" class="productImage">
        
    </div>
  </div>


  <div class="section s3">
    <div class="backgroundContainer">
      <div class="eucalyptusBackground"></div>
  </div>
  <div class="eucalyptusHeader">
      
      <h1 class="title">
          Eucalyptus Tea Tree Laundr Bombs
      </h1>
      <p class="price">
          $18.99
      </p>
      <button class="button">Add to Cart</button>
  </div>
  <div>
      <img src="detergentImages/eucalyptusMockup.png" alt="eucalyptusMockup" class="productImage">
      
  </div>
</div>

<div class="section s4">
<div class="backgroundContainer">
  <div class="gardeniaBackground"></div>
</div>
<div class="gardeniaHeader">
  
  <h1 class="title">
      White Gardenia Laundr Bombs
  </h1>
  <p class="price">
      $18.99
  </p>
  <button class="button">Add to Cart</button>
</div>
<div>
  <img src="detergentImages/gardeniaMockup.png" alt="gardeniaMockup" class="productImage">
  
</div>
</div>

<div class="section s5">
<div class="backgroundContainer">
  <div class="mahoganyBackground"></div>
</div>
<div class="mahoganyHeader">
  
  <h1 class="title">
      Mahogany Teakwood Laundr Bombs
  </h1>
  <p class="price">
      $18.99
  </p>
  <button class="button">Add to Cart</button>
</div>
<div>
  <img src="detergentImages/mahoganyMockup.png" alt="mahoganyMockup" class="productImage">
  
</div>
</div>

<div class="section s6">
<div class="backgroundContainer">
  <div class="watermelonBackground"></div>
</div>
<div class="watermelonHeader">
  
  <h1 class="title">
      Watermelon Cucumber Laundr Bombs
  </h1>
  <p class="price">
      $18.99
  </p>
  <button class="button">Add to Cart</button>
</div>
<div>
  <img src="detergentImages/watermelonMockup.png" alt="watermelonMockup" class="productImage">
  
</div>
</div>


    

<script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.9/fullpage.min.js" integrity="sha512-Gx/C4x1qubng2MWpJIxTPuWch9O88dhFFfpIl3WlqH0jPHtCiNdYsmJBFX0q5gIzFHmwkPzzYTlZC/Q7zgbwCw==" crossorigin="anonymous"></script>

<script>
  
  new fullpage('#fullPage', {
    autoScrolling: true,
    scrollingSpeed: 400
  })
   </script>
  
  
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"></div>


  </body>
  
</html>
    );
}