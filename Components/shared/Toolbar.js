import 	React					from 'react';

import { Navigation, Dropdown, Item }	from 'matts-toolbox/Components/Pure/Navigation/Horizontal';

export default class Toolbar extends React.Component {

	constructor(props) {
		super();

		this.state = {
			searchType:	'hotels'
		};
	
//		console.log(Navigation.Pure.Navigation.Horizontal.Navigation);
	
	}
	
	
	componentDidMount() {
		console.log(Navigation);
	}
	
	changeSearchType(type) {
		this.setState({
			searchType: type
		});
	}

/*

	*/
	
	navigate(path) {
		window.location = path;
	}

	render() {
		
		return (
			
			<div id='toolbar' className="pure-g">
			    <div className="pure-u-3-24">
			    	
			    </div>
			    <div className="pure-u-18-24">
					<Navigation>
			    		<Dropdown label={'What we do'}>
			    			<Item onSelect={this.navigate.bind(this, '/what-we-do/consultation')} label='Consultation' />
			    			<Item onSelect={this.navigate.bind(this, '/what-we-do/development')} label='Developement' />
			    			<Item onSelect={this.navigate.bind(this, '/what-we-do/maintenance')} label='Maintenance' />
			    			<Item onSelect={this.navigate.bind(this, '/what-we-do/events')} label='Events' />
			    		</Dropdown>
			    		
			    		<Dropdown label={'Who we are'}>
			    			<Item onSelect={this.navigate.bind(this, '/who-we-are/management')} label='Management' />
			    			<Item onSelect={this.navigate.bind(this, '/who-we-are/team')} label='Team' />
			    			<Item onSelect={this.navigate.bind(this, '/who-we-are/contact')} label='Contact' />
			    		</Dropdown>

			    	</Navigation>
			    	<input className='textfield-query' type='textfield' />
			    </div>
			    <div className="pure-u-3-24">
			    
			    </div>
			</div>
			
		);
		
				

	}

}

window.component_Toolbar = Toolbar;