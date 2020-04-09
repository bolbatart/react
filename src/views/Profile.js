import React from 'react';


class Profile extends React.Component {
  // constructor(props) {
  //   super(props);
    
  //   this.state = {
  //     email: ''
  //   }
  // }
  
  // handleEmailChange = (event) => {
  //   this.setState({
  //     email: event.target.value
  //   })
  // }

  // handleSubmit = (event) => {
  //   this.props.onSubmitLogin(this.state.email)
  // }

  render () {
    return (
      <div>
        Profile page
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     fromState: state.element,
//   };
// };

// const mapDispachToProps = dispatch => {
//   return {
//     onSubmitLogin: (email) => dispatch(actions.simpleAction(email)),
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispachToProps
// )(App);

export default Profile;