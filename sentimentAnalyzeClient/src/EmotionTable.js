import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
        let emotionDetails = Object.entries(this.props.emotions).map(function(mapentry){
            return(
                <tr>
                    <td>{mapentry[0]}</td>
                    <td>{mapentry[1]}</td>
                </tr>
            )
                });
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
            {
                emotionDetails
                
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;
