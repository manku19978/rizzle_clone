import Link from 'next/link';
import cn from 'classnames';
import { Logo } from '../../icons';
import s from './NavBar.module.css';

const navItems = [
  { title: 'Text to Video', link: '/text-to-video' },
  { title: 'Video Feed', link: '/video-feed' },
  { title: 'ROI Calculator', link: '/roi-calculator' },
];

const NavBar = () => {
  const navList = navItems.map((item) => {
    const { title, link } = item;

    return (
      <Link key={link} href={link} className={s.navItem}>
        {title}

        {link === '/text-to-video' && <span className={s.newTag}>New</span>}
      </Link>
    );
  });

  return (
    <div className="container">
      <div className={s.wrapper}>
        <div className={cn('flex', 'align-center')}>
          <Link href="/" className={cn('cp', { [s.logoContainer]: true })}>
            <Logo />
          </Link>

          <div
            className={cn('cp', 'flex', 'align-center', { [s.navList]: true })}
          >
            {navList}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
