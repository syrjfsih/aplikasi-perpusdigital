export default function ApplicationLogo(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>Library Logo</title>
            <rect width="64" height="64" rx="12" fill="#5C4438" />
            <path
                d="M18 20C18 18.8954 18.8954 18 20 18H44C45.1046 18 46 18.8954 46 20V44C46 45.1046 45.1046 46 44 46H20C18.8954 46 18 45.1046 18 44V20Z"
                fill="#F4EEE7"
            />
            <path
                d="M22 24H42V26H22V24ZM22 30H42V32H22V30ZM22 36H42V38H22V36Z"
                fill="#5C4438"
            />
            <path
                d="M28 18V46"
                stroke="#A47148"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="2 4"
            />
            <path
                d="M36 18V46"
                stroke="#A47148"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="2 4"
            />
        </svg>
    );
}
