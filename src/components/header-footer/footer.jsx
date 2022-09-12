export default function Footer(props) {
  return (
    <footer className='row space-evenly'>

      {/* Section-1 */}
      <div className='footer__section_1'>
        
        {/* Logo */}
        <img className="logo" src="assets/logo.svg" alt="logo" />
        
        {/* Text */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.         </p>

        {/* Social Icons */}
        <div className='footer__icons'>
          <img src='assets/social-media/discord.svg' alt='Discord Logo' />
          <img src='assets/social-media/instagram.svg' alt='Instagram Logo' />
          <img src='assets/social-media/twitter.svg' alt='Twitter Logo' />
          <img src='assets/social-media/facebook.svg' alt='Facebook Logo' />
        </div>
      </div>
      

      {/* Section-2 */}
      <div className='footer__section_2'>
        <h2>Navigation</h2>
        <ul>
          <li>About</li>
          <li>Story</li>
          <li>Game & Features</li>
          <li>Ghost NFT Slot</li>
          <li>Stemverse Land</li>
        </ul>
      </div>

      {/* Section-3 */}
      <div className='footer__section_3'>
        <h2>Support</h2>
        <ul>
          <li>Help Center</li>
          <li>Connect Wallet</li>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
        </ul>
      </div>

      {/* Section-4 */}
      <div className='footer__section_4'>
        <h2>Newsletter</h2>
        <input type='text' placeholder='' />
        <input type='submit' />
      </div>
    </footer>
  )
}
