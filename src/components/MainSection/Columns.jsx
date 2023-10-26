import { useContext } from 'react';

import SingleColumnContext from '@context/SingleColumnContext';

const MultipleColumnsBtn = () => {
    const { singleColumn, setSingleColumn } = useContext(SingleColumnContext);
    return (
        <>
            {/* prettier-ignore */}
            <svg id="multipleColumnsBtn" className="active" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setSingleColumn(false)}>
            <rect className="multipleColumnsBtn__background" width="40" height="40" rx="10" fill="#4A4A4A" />
            <path fillRule="evenodd" clipRule="evenodd" d="M27.5428 8.79993H13.257C11.6791 8.79993 10.3999 10.0791 10.3999 11.6571V15.9428C10.3999 17.5207 11.6791 18.7999 13.257 18.7999H27.5428C29.1207 18.7999 30.3999 17.5207 30.3999 15.9428V11.6571C30.3999 10.0791 29.1207 8.79993 27.5428 8.79993ZM11.8285 11.6571C11.8285 10.8681 12.4681 10.2285 13.2571 10.2285H27.5428C28.3318 10.2285 28.9714 10.8681 28.9714 11.6571V15.9428C28.9714 16.7318 28.3318 17.3714 27.5428 17.3714H13.2571C12.4681 17.3714 11.8285 16.7318 11.8285 15.9428V11.6571ZM13.257 21.6571H27.5428C29.1207 21.6571 30.3999 22.9362 30.3999 24.5142V28.7999C30.3999 30.3779 29.1207 31.6571 27.5428 31.6571H13.257C11.6791 31.6571 10.3999 30.3779 10.3999 28.7999V24.5142C10.3999 22.9362 11.6791 21.6571 13.257 21.6571ZM11.8285 24.5141C11.8285 23.7252 12.4681 23.0856 13.2571 23.0856H27.5428C28.3318 23.0856 28.9714 23.7252 28.9714 24.5141V28.7999C28.9714 29.5888 28.3318 30.2284 27.5428 30.2284H13.2571C12.4681 30.2284 11.8285 29.5888 11.8285 28.7999V24.5141Z" className="multipleColumnsBtn__icon"
                  fill={singleColumn ? "#707070" : "#fff"} />
        </svg>
        </>
    );
};

const SingleColumnBtn = () => {
    const { singleColumn, setSingleColumn } = useContext(SingleColumnContext);
    return (
        <>
            {/* prettier-ignore */}
            <svg id="singleColumnBtn" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setSingleColumn(true)}>
            <rect className="singleColumnBtn__background" width="40" height="40" rx="10" fill="#4A4A4A" />
            <path fillRule="evenodd" clipRule="evenodd" d="M10.4004 11.8287C10.4004 11.4342 10.7202 11.1144 11.1147 11.1144H29.6861C30.0806 11.1144 30.4004 11.4342 30.4004 11.8287C30.4004 12.2232 30.0806 12.543 29.6861 12.543H11.1147C10.7202 12.543 10.4004 12.2232 10.4004 11.8287ZM27.5432 15.4001H13.2575C11.6796 15.4001 10.4004 16.6793 10.4004 18.2572V22.5429C10.4004 24.1209 11.6796 25.4001 13.2575 25.4001H27.5432C29.1212 25.4001 30.4004 24.1209 30.4004 22.5429V18.2572C30.4004 16.6793 29.1212 15.4001 27.5432 15.4001ZM11.8291 18.2573C11.8291 17.4684 12.4687 16.8288 13.2577 16.8288H27.5434C28.3324 16.8288 28.972 17.4684 28.972 18.2573V22.5431C28.972 23.332 28.3324 23.9716 27.5434 23.9716H13.2577C12.4687 23.9716 11.8291 23.332 11.8291 22.5431V18.2573ZM11.1147 28.2573C10.7202 28.2573 10.4004 28.5771 10.4004 28.9716C10.4004 29.3661 10.7202 29.6859 11.1147 29.6859H29.6861C30.0806 29.6859 30.4004 29.3661 30.4004 28.9716C30.4004 28.5771 30.0806 28.2573 29.6861 28.2573H11.1147Z" className="singleColumnBtn__icon"
                  fill={singleColumn ? "#fff" : "#707070"} />
        </svg>
        </>
    );
};

export { MultipleColumnsBtn, SingleColumnBtn };
