import frames from './assets/images/image-web-3-mobile.jpg';
function Frame (){
    return(
        <div class="Web 3.0">

    <img className='main-frame' src={frames} aria-hidden="true" alt='mainFrame'/>
    <h1>The Bright Future of Web 3.0?</h1>
    <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
    <button className='btn'>READ MORE</button>

  </div>

    );
}
export default Frame;