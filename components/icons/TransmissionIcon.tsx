import { iconProps } from '@/types/iconProps';

export default function TransmissionIcon({ width, height }: iconProps) {
    return (
        <svg
            height={height}
            width={width}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
            className='fill-blue-primary'
        >
            <path
                d='M336.896,269.874c-18.795,0-36.449,7.308-49.698,20.575c-13.276,13.267-20.593,30.912-20.593,49.698
		c0,18.768,7.307,36.422,20.593,49.707c13.276,13.267,30.921,20.574,49.698,20.574c18.769,0,36.422-7.307,49.698-20.574
		c13.276-13.286,20.584-30.939,20.584-49.707c0-18.778-7.307-36.43-20.574-49.689C373.336,277.182,355.682,269.874,336.896,269.874z
		 M378.1,381.35c-11.011,11.003-25.636,17.061-41.204,17.061c-15.559,0-30.202-6.058-41.204-17.061
		c-11.011-11.002-17.07-25.635-17.07-41.203c0-15.568,6.058-30.202,17.07-41.195c11.002-11.011,25.645-17.069,41.204-17.069
		c15.568,0,30.193,6.058,41.204,17.069c11.002,10.993,17.06,25.627,17.06,41.195C395.161,355.715,389.102,370.348,378.1,381.35z'
            />
            <path
                d='M499.041,317.118l-37.455-5.428c-2.346-0.18-4.368-1.654-5.277-3.838l-12.134-29.294
		c-0.908-2.175-0.531-4.656,1.006-6.436l22.4-30.103c3.569-4.18,3.335-10.392-0.556-14.274l-17.726-17.726
		c-2.04-2.05-4.736-3.083-7.433-3.083c-2.427,0-4.863,0.836-6.832,2.526l-30.112,22.409c-1.141,0.98-2.588,1.492-4.044,1.492
		c-0.809,0-1.618-0.162-2.382-0.476l-29.312-12.153c-2.166-0.89-3.65-2.94-3.838-5.268l-5.438-37.455
		c-0.422-5.484-4.989-9.708-10.472-9.708h-25.078c-5.492,0-10.059,4.224-10.481,9.708l-5.447,37.455
		c-0.179,2.328-1.654,4.378-3.829,5.276l-29.312,12.144c-0.773,0.314-1.582,0.476-2.39,0.476c-1.456,0-2.895-0.512-4.045-1.492
		l-30.094-22.4c-1.969-1.69-4.404-2.535-6.822-2.535c-2.706,0-5.402,1.043-7.452,3.092l-17.726,17.717
		c-3.883,3.892-4.116,10.094-0.557,14.274l22.4,30.103c1.519,1.779,1.914,4.26,1.016,6.436l-12.144,29.303
		c-0.881,2.175-2.931,3.65-5.258,3.829l-37.474,5.438c-5.464,0.432-9.689,4.998-9.689,10.49v25.06
		c0,5.502,4.225,10.068,9.689,10.498l37.474,5.43c2.328,0.189,4.378,1.672,5.258,3.838l12.144,29.311
		c0.907,2.158,0.503,4.656-1.016,6.436l-22.4,30.103c-3.559,4.161-3.326,10.382,0.557,14.265l17.726,17.726
		c2.05,2.049,4.746,3.082,7.443,3.082c2.427,0,4.863-0.836,6.832-2.526l30.094-22.409c1.15-0.98,2.589-1.483,4.045-1.483
		c0.809,0,1.617,0.152,2.39,0.476L304.6,459.57c2.175,0.899,3.659,2.93,3.838,5.276l5.438,37.456
		c0.422,5.464,4.989,9.698,10.481,9.698h25.078c5.492,0,10.049-4.234,10.481-9.698l5.429-37.456
		c0.189-2.345,1.672-4.376,3.838-5.276l29.312-12.144c0.773-0.324,1.581-0.476,2.39-0.476c1.456,0,2.904,0.503,4.045,1.483
		l30.103,22.409c1.969,1.69,4.404,2.526,6.832,2.526c2.697,0,5.393-1.034,7.433-3.082l17.726-17.726
		c3.9-3.883,4.125-10.104,0.556-14.265l-22.4-30.103c-1.509-1.78-1.914-4.279-1.006-6.436l12.134-29.311
		c0.909-2.167,2.931-3.65,5.277-3.838l37.455-5.43c5.474-0.431,9.699-4.997,9.699-10.48v-25.078
		C508.74,322.125,504.515,317.559,499.041,317.118z M496.722,351.364l-36.574,5.304c-6.643,0.71-12.324,4.944-14.939,11.182
		l-12.126,29.266c-2.598,6.22-1.582,13.25,2.633,18.481l21.879,29.402l-15.856,15.855l-29.392-21.878
		c-3.236-2.616-7.29-4.054-11.461-4.054c-2.436,0-4.808,0.485-6.984,1.402l-29.339,12.152c-6.211,2.589-10.444,8.278-11.155,14.93
		l-5.302,36.574h-22.418l-5.312-36.565c-0.701-6.652-4.926-12.35-11.173-14.957l-29.276-12.117c-2.238-0.944-4.602-1.42-7.028-1.42
		c-4.153,0-8.198,1.438-11.443,4.044l-29.411,21.887l-15.847-15.855l21.87-29.402c4.224-5.232,5.24-12.27,2.652-18.446
		l-12.117-29.248c-2.553-6.256-8.252-10.517-14.94-11.236l-36.592-5.304v-22.436l36.575-5.303
		c6.714-0.701,12.422-4.98,14.929-11.164l12.126-29.267c2.606-6.22,1.591-13.258-2.633-18.48l-21.879-29.411l15.865-15.856
		l29.383,21.878c3.245,2.624,7.29,4.054,11.461,4.054c2.409,0,4.763-0.468,6.992-1.393l29.303-12.144
		c6.23-2.571,10.481-8.278,11.173-14.948l5.321-36.566h22.418l5.302,36.584c0.72,6.669,4.972,12.369,11.173,14.921l29.312,12.153
		c2.22,0.916,4.575,1.393,6.984,1.393c4.18,0,8.234-1.438,11.47-4.054l29.392-21.878l15.856,15.856l-21.86,29.375
		c-4.243,5.214-5.268,12.26-2.661,18.471l12.135,29.312c2.588,6.22,8.288,10.462,14.948,11.164l36.565,5.303V351.364z'
            />
            <path
                d='M170.661,260.418l18.463-6.742c4.054-1.474,6.274-5.816,5.123-9.96l-6.066-29.05
		c-0.486-1.798,0.062-3.686,1.411-4.926l18.328-16.826c0.907-0.836,2.094-1.276,3.29-1.276c0.584,0,1.169,0.099,1.716,0.296
		l28.198,8.423c0.962,0.359,1.95,0.53,2.921,0.521c3.11-0.009,6.068-1.798,7.452-4.764l8.278-17.824
		c1.843-3.91,0.332-8.557-3.416-10.67l-24.584-16.144c-1.6-0.907-2.562-2.624-2.472-4.476l1.061-24.853
		c0.081-1.843,1.187-3.461,2.841-4.233l26.138-14.076c3.928-1.78,5.807-6.292,4.332-10.328l-6.732-18.471
		c-1.214-3.336-4.378-5.43-7.776-5.42c-0.728,0.009-1.465,0.098-2.193,0.306l-29.052,6.049c-0.432,0.126-0.872,0.189-1.303,0.189
		c-1.348,0.009-2.661-0.566-3.614-1.59l-16.808-18.32c-1.259-1.356-1.646-3.29-0.99-5.006l8.414-28.207
		c1.501-4.035-0.332-8.53-4.252-10.355l-17.824-8.296c-1.133-0.522-2.329-0.773-3.506-0.773c-2.885,0.017-5.654,1.546-7.154,4.206
		l-16.153,24.593c-0.872,1.528-2.49,2.471-4.243,2.48h-0.215l-24.863-1.078c-1.834-0.09-3.488-1.195-4.242-2.858L107.103,4.836
		c-1.375-3.038-4.387-4.853-7.542-4.836c-0.926,0-1.869,0.162-2.786,0.494l-18.463,6.75c-4.054,1.475-6.283,5.807-5.114,9.951
		l6.058,29.06c0.494,1.771-0.054,3.667-1.411,4.908L59.517,67.99c-0.925,0.845-2.094,1.286-3.299,1.295
		c-0.575,0-1.159-0.108-1.726-0.324l-28.188-8.395c-0.961-0.369-1.95-0.539-2.921-0.539c-3.101,0.017-6.05,1.798-7.442,4.764
		L7.662,82.624c-1.834,3.901-0.333,8.539,3.416,10.669l24.584,16.153c1.609,0.899,2.562,2.616,2.471,4.441l-1.06,24.871
		c-0.072,1.834-1.196,3.461-2.85,4.234L8.085,157.068c-3.919,1.779-5.798,6.283-4.324,10.319l6.733,18.471
		c1.222,3.335,4.386,5.447,7.784,5.438c0.719-0.009,1.447-0.117,2.175-0.323l29.069-6.058c0.423-0.117,0.854-0.18,1.277-0.18
		c1.357,0,2.678,0.558,3.622,1.582l16.818,18.337c1.258,1.348,1.626,3.29,0.989,5.016l-8.414,28.188
		c-1.5,4.036,0.342,8.539,4.252,10.374l17.815,8.286c1.141,0.522,2.337,0.773,3.514,0.773c2.886-0.018,5.654-1.537,7.146-4.197
		l16.153-24.584c0.862-1.528,2.463-2.482,4.197-2.482h0.27l24.854,1.07c1.842,0.072,3.487,1.177,4.252,2.849l14.067,26.139
		c1.384,3.02,4.386,4.836,7.55,4.827C168.801,260.903,169.744,260.75,170.661,260.418z M156.98,224.491
		c-2.741-5.564-8.242-9.151-14.454-9.394l-24.763-1.06c-0.306-0.018-0.611-0.036-0.917-0.036
		c-5.834,0.036-11.299,3.128-14.338,8.108L87.984,244.23l-11.883-5.528l7.569-25.321c1.986-5.887,0.628-12.314-3.569-16.845
		l-16.79-18.309c-3.21-3.524-7.784-5.528-12.558-5.502c-1.33,0-2.661,0.162-3.946,0.486l-26.148,5.447l-4.477-12.297l23.514-12.656
		c5.564-2.777,9.151-8.288,9.376-14.444l1.07-24.799c0.296-6.22-2.805-12.009-8.117-15.227L19.931,84.727l5.519-11.883l25.357,7.568
		c1.762,0.594,3.595,0.881,5.465,0.881c4.206-0.018,8.225-1.581,11.371-4.458l18.274-16.773c4.629-4.206,6.535-10.498,5.034-16.539
		l-5.438-26.121l12.296-4.494l12.646,23.513c2.751,5.547,8.234,9.133,14.446,9.393l24.889,1.079l0.746,0.018
		c5.879-0.027,11.353-3.137,14.391-8.126l14.526-22.121l11.883,5.527l-7.56,25.304c-2.013,5.896-0.664,12.314,3.56,16.862
		l16.817,18.328c3.208,3.514,7.775,5.51,12.512,5.483c1.349-0.009,2.679-0.17,3.991-0.476l26.121-5.456l4.476,12.305l-23.524,12.674
		c-5.491,2.733-9.069,8.18-9.375,14.418l-1.07,24.781c-0.297,6.23,2.805,12.018,8.126,15.254l22.085,14.516l-5.519,11.892
		l-25.348-7.577c-1.762-0.594-3.595-0.89-5.474-0.881c-4.234,0.008-8.279,1.609-11.362,4.44l-18.346,16.836
		c-4.557,4.206-6.436,10.481-4.97,16.485l5.456,26.138l-12.306,4.477L156.98,224.491z'
            />
            <path
                d='M186.04,154.802c6.499-13.987,7.173-29.663,1.888-44.135c-5.294-14.48-15.891-26.04-29.842-32.521
		c-7.792-3.64-16.062-5.465-24.575-5.429c-6.651,0.027-13.231,1.213-19.559,3.524c-14.498,5.285-26.057,15.883-32.556,29.86
		c-6.499,13.96-7.173,29.626-1.897,44.134c5.304,14.49,15.911,26.049,29.861,32.53c7.784,3.622,16.053,5.455,24.565,5.42
		c6.661-0.036,13.241-1.222,19.578-3.524C167.965,179.377,179.515,168.77,186.04,154.802z M149.376,173.372
		c-5.042,1.843-10.282,2.769-15.505,2.787c-6.634,0.036-13.25-1.403-19.442-4.288c-11.065-5.151-19.442-14.302-23.64-25.762
		c-4.17-11.478-3.65-23.882,1.501-34.939c5.151-11.074,14.31-19.469,25.77-23.639c5.051-1.852,10.292-2.778,15.506-2.796
		c6.634-0.028,13.24,1.411,19.433,4.297c11.056,5.15,19.451,14.301,23.64,25.761c4.18,11.47,3.648,23.865-1.493,34.939
		C169.978,160.797,160.837,169.184,149.376,173.372z'
            />
        </svg>
    );
}