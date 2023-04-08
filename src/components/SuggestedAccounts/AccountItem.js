import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const accountPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper className={cx('preview')}>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy offset={[-20, 0]} interactive delay={[800, 0]} placement="bottom" render={accountPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1681106400&x-signature=H5arhzccPphYqembc%2FpB6JaniVY%3D"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>theanh28entertainment</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Theanh28 Entertainment</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
