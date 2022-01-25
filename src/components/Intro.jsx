import './Intro.scss';
import Button from './Button';

const Intro = () => {
    return (
        <section id="about" className="hero">
            <div className="hero__sub-text">Greetings, I'm</div>
            <h2 className="hero__header">Brady Bridges.</h2>
            <h3 className="hero__sub-header">I'm a frontend engineer</h3>
            <p className="hero__description">
                Sint laboris quis aute eiusmod elit aute proident aliquip.
                Do amet eiusmod eiusmod commodo cupidatat ad proident.
                Sit dolor elit consectetur culpa ullamco ut sint.
                Sunt qui veniam exercitation nisi.
                Cupidatat exercitation mollit nulla deserunt adipisicing fugiat ipsum.
                Anim ullamco sint nostrud reprehenderit tempor.
                Voluptate veniam ex ad velit Lorem sit consequat consectetur.
            </p>

            <Button text="Call To Action" handler={() => alert('you should hire me?')} />
        </section>
    );
}

export default Intro;