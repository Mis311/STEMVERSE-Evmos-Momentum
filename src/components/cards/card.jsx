
export default function StoryCard(props) {
    return (
    <div className='card'>
      <div>
        <h2>{props.category || 'STEMVERSE'}</h2>
        <p>{props.description || "login and unlock the world of STEM"}</p>
        <div className='image' style={{
          background: `url(${props.image})` || 'url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Fscj5pzybkrj91.png%3Fwidth%3D640%26crop%3Dsmart%26auto%3Dwebp%26s%3D91c192e39c1ddac1b13c856e14167b3b97993f96&f=1&nofb=1")',
          backgroundSize: 'contain'
        }}></div>
      </div>
    </div>
  );
}
