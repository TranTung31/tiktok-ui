import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Image = forwardRef(({ src, alt, className, fallBack: customFallBack = images.noImage, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');
    const handleError = () => {
        setFallBack(customFallBack);
    };

    return (
        <img
            className={cx(styles.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
