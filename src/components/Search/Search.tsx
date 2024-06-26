type SearchProps = {
  className?: string;
};

const Search = ({ className }: SearchProps) => {
  return (
    <div className={`relative ${className}`}>
      <input
        type="search"
        className="bg-light-grey rounded min-w-72 w-full h-8 p-2.5 pl-7 placeholder:text-sm placeholder:text-dark-grey"
        placeholder="Поиск"
      ></input>
      <svg
        className="absolute top-2.5 left-2.5"
        width="12"
        height="12"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.24826 9.35176L11.9144 12.0775C12.0335 12.2127 12.0276 12.4198 11.9011 12.5477L11.4345 13.0247C11.3719 13.0892 11.2868 13.1255 11.1979 13.1255C11.109 13.1255 11.0238 13.0892 10.9613 13.0247L8.29511 10.299C8.22136 10.2235 8.15444 10.1414 8.09514 10.0536L7.59524 9.3722C6.7681 10.0475 5.74095 10.4151 4.68245 10.4148C2.50127 10.4225 0.6059 8.8843 0.118463 6.71075C-0.368974 4.5372 0.681608 2.30844 2.64823 1.34396C4.61486 0.379474 6.97267 0.936675 8.32576 2.68568C9.67886 4.43469 9.66613 6.90871 8.29511 8.64307L8.96165 9.11326C9.06574 9.18137 9.1619 9.26138 9.24826 9.35176ZM1.3498 5.64457C1.3498 7.52631 2.84191 9.05176 4.68251 9.05176C5.5664 9.05176 6.41409 8.69279 7.03909 8.05382C7.66409 7.41485 8.01522 6.54822 8.01522 5.64457C8.01522 3.76284 6.52311 2.23739 4.68251 2.23739C2.84191 2.23739 1.3498 3.76284 1.3498 5.64457Z"
          fill="#707070"
        />
      </svg>
    </div>
  );
};

export default Search;
