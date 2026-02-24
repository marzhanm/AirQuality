import mockimage from '../assets/mock-device.jpg';

function About(){
    return(
    <div className='flex flex-col items-center mb-4 gap-5 mb-2 p-20'>
        <h2 className="text-3xl font-bold text-heading">About</h2>
        <div className="relative items-center block max-w p-8 bg-white border border-white rounded-lg shadow-sm ">
        <div>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt erat non lectus accumsan fringilla. 
             Quisque gravida est a orci efficitur, id tincidunt orci porttitor. Curabitur pretium vulputate purus eget congue. 
             Fusce condimentum suscipit porttitor. Fusce eget cursus ante. Mauris euismod sapien quis massa vehicula laoreet. 
             Nulla dapibus, libero eget imperdiet sodales, tellus nisl bibendum arcu, a hendrerit dolor tortor sollicitudin quam. 
             Nunc tempor quam at ligula ultricies, sit amet porta arcu convallis. Mauris eget feugiat nisi. Aliquam erat volutpat. 
             Donec quis est iaculis, vehicula enim eu, tristique justo. Integer blandit a orci ut tincidunt. 
             Duis accumsan erat eu elit iaculis, ut malesuada libero pellentesque. 
             Interdum et malesuada fames ac ante ipsum primis in faucibus. 
             Nam tincidunt augue eros, sed imperdiet massa venenatis vel. Ut justo enim, commodo nec mi sit amet, aliquam interdum nunc.
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt erat non lectus accumsan fringilla. 
             Quisque gravida est a orci efficitur, id tincidunt orci porttitor. Curabitur pretium vulputate purus eget congue. 
             Fusce condimentum suscipit porttitor. Fusce eget cursus ante. Mauris euismod sapien quis massa vehicula laoreet. 
             Nulla dapibus, libero eget imperdiet sodales, tellus nisl bibendum arcu, a hendrerit dolor tortor sollicitudin quam. 
             Nunc tempor quam at ligula ultricies, sit amet porta arcu convallis. Mauris eget feugiat nisi. Aliquam erat volutpat. 
             Donec quis est iaculis, vehicula enim eu, tristique justo. Integer blandit a orci ut tincidunt. 
             Duis accumsan erat eu elit iaculis, ut malesuada libero pellentesque. 
             Interdum et malesuada fames ac ante ipsum primis in faucibus. 
             Nam tincidunt augue eros, sed imperdiet massa venenatis vel. Ut justo enim, commodo nec mi sit amet, aliquam interdum nunc.
             </div>
        </div>
        <div className='flex flex-row py-2'>
        <div >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Fusce tincidunt erat non lectus accumsan fringilla. 
            Quisque gravida est a orci efficitur, id tincidunt orci porttitor. Curabitur pretium vulputate purus eget congue. 
            Fusce condimentum suscipit porttitor. Fusce eget cursus ante. Mauris euismod sapien quis massa vehicula laoreet. 
            Nulla dapibus, libero eget imperdiet sodales, tellus nisl bibendum arcu, a hendrerit.
        </div>
        <div>
            <img src={mockimage} />
        </div>
        </div>
    </div>)
}

export default About;