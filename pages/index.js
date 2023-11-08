import Navbar from '../components/navbar';

export default function YourPage() {
  return (
    <div>
      <Navbar />
      <header>
        <h1>Welcome to Your Website</h1>
      </header>
      <main>
        <section>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
            tincidunt quam. Curabitur tristique, quam ac malesuada tristique,
            erat dolor aliquet sapien, in volutpat risus dui id est. Sed vitae
            commodo erat.
          </p>
        </section>
        <section>
          <h2>Services</h2>
          <ul>
            <li>Web Development</li>
            <li>Graphic Design</li>
            <li>Digital Marketing</li>
          </ul>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>
            Email: info@example.com
            <br />
            Phone: +1 (123) 456-7890
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
