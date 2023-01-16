import { Link } from 'react-router-dom';

export const Public = () => {
  return (
    <section className='public'>
      <header>
        <h1>
          Welcome to <span className='nowrap'>Tech Repairs!</span>
        </h1>
      </header>
      <main className='public__main'>
        <p>
          Located in Beautiful Downtown Foo City, Tech Repairs provides a
          trained staff ready to meet any of your tech repair needs.
        </p>
        <address className='public__addr'>
          Tech Repairs
          <br />
          333 Foo Drive
          <br />
          Foo City, CA 12345
          <br />
          <a href='tel:+15555555555'>(555) 555-5555</a>
        </address>
        <br />
        <p>Owner: Nick Garbalau</p>
      </main>
      <footer>
        <Link to='/login'>Employee Login</Link>
      </footer>
    </section>
  );
};
