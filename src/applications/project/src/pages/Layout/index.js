import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';

import useActions from 'app/hooks/useActions';

import * as commentsActions from 'app/redux/comments/actions';
import * as sessionActions from 'app/redux/session/actions';

import Button from '@root/components/Button';

import './style.css';

export default function Layout({ children }) {
  const { actionCommentAdd } = useActions(commentsActions);
  const { setLang } = useActions(sessionActions);
  const { comments, lang } = useSelector(state => ({
    comments: state.comments,
    lang: state.session.lang,
  }));

  return (
    <div className="l-wrapper">
      <h1>Current language is {lang}</h1>
      <Link to="/test-page">Test page</Link>
      <Button onClick={() => setLang(lang === 'en' ? 'ru' : 'en')}>
        Change language
      </Button>
      {comments.map((c, i) => (
        <section key={i}>
          <p>{c.content}</p>
          <a href="#">{c.name}</a>
          <Button
            onClick={() => {
              actionCommentAdd(`Text ${i}`);
            }}
          >
            <FormattedMessage id="Click me" defaultMessage="Click me" />
          </Button>
        </section>
      ))}
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
