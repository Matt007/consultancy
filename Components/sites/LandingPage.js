import 	React			from 'react';
import	Toolbar		from './../shared/Toolbar';


export default class LandingPage extends React.Component {

	constructor(props) {
		super();

		this.state = {

		};
	
		
	
	}
	
	
	componentDidMount() {

	}
	
	onClick() {
		alert("ma wat anderes!");;

		
	}

	render() {
		
		return (
			
			<div>
				<Toolbar />
				<img src='/Public/images/man-76202_1280.jpg' style={{ width: '100%', height: 300 }} />
			</div>
			
		);
		
				

	}

}

window.component_LandingPage = LandingPage;