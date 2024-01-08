import * as React from 'react';
import PropTypes from 'prop-types';
import clsxm from '../../utils/clsxm';

export default function Container({ children, className, ...other }) {
  return (
    <section
      className={clsxm(
        'mx-auto max-w-full',

        'sm:max-w-[600px]',

        'md:max-w-[700px]',

        'lg:max-w-[900px]',

        'xl:max-w-[1050px]',

        className,
      )}
      {...other}
    >
      {children}
    </section>
  );
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

Container.defaultProps = {
  className: '',
};
