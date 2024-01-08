import * as React from 'react';
import PropTypes from 'prop-types';
import clsxm from '../../utils/clsxm';

export default function TitlePage({ title, isArchived = false }) {
  return (
    <h2 className="text-xl font-medium tracking-wider flex items-center gap-1 mb-6">
      <span className={clsxm(
        'text-3xl text-primary',

        isArchived && 'text-archived',
      )}
      >
        #
      </span>
      {title}
    </h2>
  );
}

TitlePage.propTypes = {
  isArchived: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

TitlePage.defaultProps = {
  isArchived: false,
};
