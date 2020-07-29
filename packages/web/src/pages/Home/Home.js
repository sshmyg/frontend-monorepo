import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { Button } from '@root/components';

import { useActions, useSelector } from '@/hooks';

import * as sessionActions from '@/redux/session/actions';
import * as commentsActions from '@/redux/comments/actions';

import { Block, Section } from '@/components';

import messages from './Home.messages';

export const Home = () => {
  const { actionCommentAdd, setLang } = useActions({
    ...commentsActions,
    ...sessionActions,
  });
  const { lang, comments } = useSelector((state) => ({
    comments: state.comments,
    lang: state?.session?.lang,
    test: state?.some?.non?.existing?.path ?? 'test',
  }));

  return (
    <Fragment>
      <Section>
        <Link to="/inner">Inner page</Link>
        <br />
        <Button onClick={() => setLang(lang === 'en' ? 'ru' : 'en')}>
          Change language {lang}
        </Button>
      </Section>
      <Section>
        <Block>
          {comments.map((c, i) => (
            <div key={i}>
              <p>{c.content}</p>
              <strong>{c.name}</strong>
              <br />
              <Button
                onClick={() => {
                  actionCommentAdd(`Text ${i}`);
                }}
              >
                <FormattedMessage {...messages['pages.home.click']} />
              </Button>
            </div>
          ))}
        </Block>
      </Section>
    </Fragment>
  );
};
