import Link from 'next/link';

function Header() {
  return (
    <header>
        <div>
          <Link className='button' href={{pathname:'/'}}>На главную</Link>
        </div>
    </header>
  )
}

export default Header;