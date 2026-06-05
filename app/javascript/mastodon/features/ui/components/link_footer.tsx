import { FormattedMessage } from 'react-intl';

import { Link } from 'react-router-dom';

import {
  domain,
  version,
  statusPageUrl,
  profile_directory as canProfileDirectory,
  termsOfServiceEnabled,
} from 'mastodon/initial_state';

import classes from './link_footer.module.scss';

export const LinkFooter: React.FC<{
  context?: 'default' | 'multi-column' | 'about';
}> = ({ context = 'default' }) => {
  const multiColumn = context === 'multi-column';

  return (
    <footer className={classes.wrapper} data-context={context}>
      <section>
        <h2 className={classes.heading}>{`${domain}:`}</h2>
        <ul className={classes.list}>
          <li>
            <Link to='/about' target={multiColumn ? '_blank' : undefined}>
              <FormattedMessage
                id='footer.about_this_server'
                defaultMessage='About'
              />
              <span className='sr-only'> {domain}</span>
            </Link>
          </li>
          {statusPageUrl && (
            <li>
              <a href={statusPageUrl} target='_blank' rel='noopener'>
                <FormattedMessage id='footer.status' defaultMessage='Status' />
              </a>
            </li>
          )}
          {canProfileDirectory && (
            <li>
              <Link to='/directory'>
                <FormattedMessage
                  id='footer.directory'
                  defaultMessage='Profiles directory'
                />
              </Link>
            </li>
          )}
          <li>
            <Link
              to='/privacy-policy'
              target={multiColumn ? '_blank' : undefined}
              rel='privacy-policy'
            >
              <FormattedMessage
                id='footer.privacy_policy'
                defaultMessage='Privacy policy'
              />
            </Link>
          </>
        )}
        <DividingCircle />
        <a href='https://site.qlub.social/apps/' target='_blank' rel='noopener'>
          <FormattedMessage id='footer.get_app' defaultMessage='Get the app' />
        </a>
        <DividingCircle />
        <a href='https://github.com/fedihost-co/qlub-social/' rel='noopener' target='_blank'>
          <FormattedMessage
            id='footer.source_code'
            defaultMessage='View source code'
          />
        </a>
        <DividingCircle />
        <span className='version'>v{version}</span>
      </p>

      <p>
        Fièrement hébergé au Québec par{' '}
        <a href='https://fedihost.co' target='_blank' rel='noopener'>FediHost</a>
      </p>
    </div>
  );
};
