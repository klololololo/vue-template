/* @缓存数据到本地
	@params
		state : object => vuex state 数据流
  		opts  : object => 缓存参数
  			key     : string  => 缓存在本地时，使用的键值
			payload : object  => 缓存在本地的数据
			cache   : boolean => 是否缓存 , default: true
	@return
		boolean => 是否成功缓存;
*/
const _cache = function _cache( state , argument , cache = true ){
    // if state error @return false
	if( typeof state != 'object' ) return false;
	const value = argument.payload,
		key = argument.key;
	// update state`s key
    state[ key ] = value;
    // judgemnt
	if( cache || typeof key === 'string') return false;
	// write vule for localStorage
	localStorage.setItem( key ,  JSON.stringify( value ) );
};

// update time | don`t cache
export const time =  function (state , payload){
	_cache( state , {
		key: 'time',
		payload: payload
	} ,false );
};

// update user`auth | don`t cache
export const auth = function auth( state , payload ){
	_cache( state , {
		key: 'auth',
		payload: payload
	} , false );
};

// update user`info
export const user = function( state , payload ){
	_cache( state , {
		key: 'user',
		payload: payload
	} );
};
