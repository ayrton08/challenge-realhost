import { IProduct } from '../store/products/types';

export const Card = ({ description, images, price, title }: IProduct) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow max-w-xs">
      <img
        className="rounded-t-lg object-contain h-80 w-full"
        src={images[0]}
        alt=""
      />
      <div className="p-3 flex flex-col justify-between h-44  rounded-b-lg">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="font-normal text-gray-700 ">
          {description.slice(0, 40)}...
        </p>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900">${price}</span>
          <a
            href="/"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Read more
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
