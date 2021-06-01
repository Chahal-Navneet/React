import React from 'react';
import AddTableNch55 from '../AddTableNch55/AddTableNch55';
import TableListNch55 from '../TableListNch55/TableListNch55';
import DisplayTableNch55 from '../DisplayTableNch55/DisplayTableNch55';


export class LearnNch55 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            warningText:"",
            updateFlag: false,
            table: {
                tableType: "Multiplication",
                tableNumber: "1",
                tableRange: "1"
            },
            tableToEdit: {
                tableType: "Multiplication",
                tableNumber: "1",
                tableRange: "1"
            },
            tableToView: {
                tableType: "Multiplication",
                tableNumber: "12",
                tableRange: "12"

            },
            tableList: [
                {tableType:"Multiplication",tableNumber: '12',tableRange: '12'},
                {tableType:"Subtraction",tableNumber: '13',tableRange: '12'},
                {tableType:"Addition",tableNumber: '14',tableRange: '12'}
            ]

        }
        this.updateTableType = this.updateTableType.bind(this);
        this.updateTableNumber = this.updateTableNumber.bind(this);
        this.updateTableRange = this.updateTableRange.bind(this);
        this.addTable = this.addTable.bind(this);
        this.viewTable = this.viewTable.bind(this);
        this.editTable = this.editTable.bind(this);
        this.deleteTable = this.deleteTable.bind(this);
        this.updateTable = this.updateTable.bind(this);

    }

    updateTableType = (e) => {
        this.setState({
            warningText:"",
            table: {
                ...this.state.table,
                tableType: e.target.value
            }
        })
    }

    updateTableNumber = (e) => {
        this.setState({
            warningText:"",
            table: {
                ...this.state.table,
                tableNumber: e.target.value
            }
        })
    }
    updateTableRange = (e) => {
        this.setState({
            warningText:"",
            table: {
                ...this.state.table,
                tableRange: e.target.value
            }
        })
    }

    addTable = (e) => {
        const tab = this.state.table;
        const checkTab = this.state.tableList.filter((table) => {
            if((table.tableType == tab.tableType) && (table.tableNumber == tab.tableNumber) && (table.tableRange == tab.tableRange)){
                return table;
            }
        });
        if(checkTab.length !== 0){
            this.setState({
                warningText: "Data already exists!"
            })
        } else {
        this.setState({
            updateFlag:false,
            tableList:[...this.state.tableList, this.state.table]
        })}
    }
    updateTable = (e) => {
        const tab = this.state.tableToEdit;
        const updatedTableList = this.state.tableList.map((table) => {
            if((table.tableType == tab.tableType) && (table.tableNumber == tab.tableNumber) && (table.tableRange == tab.tableRange)){
                return this.state.table;
            }
            else{
                return table;
            }
        });
        this.setState({
            updateFlag:false,
            tableList:updatedTableList
        })
    }
    viewTable = (tab) => {

        this.setState({
            warningText:"",
            updateFlag:false,
            tableToView: {
                tableType: tab.tableType,
                tableNumber: tab.tableNumber,
                tableRange: tab.tableRange
            }
        })
    }
    editTable = (tab) => {
        this.setState({
            warningText:"",
            table: tab,
            tableToEdit:tab,
            updateFlag:true
        })
    }
    deleteTable = (tab) => {
        const deleteTab = this.state.tableList.filter((table) => table !== tab);
        this.setState({
            warningText:"",
            updateFlag:false,
            tableList: deleteTab
        })
    }
    
    render() {
        

        return (
            <div className="container ">
                <div className="row" key="divRow">
                     <div className="col-sm-4" key="divAddTable">
                        <AddTableNch55 table={this.state.table} 
                            warning={this.state.warningText}
                            upTableType={this.updateTableType}
                            upTableNumber={this.updateTableNumber}
                            upTableRange={this.updateTableRange}
                            key="addTable"
                            addTab={this.addTable} 
                            updateTab={this.updateTable}
                            updateFlag={this.state.updateFlag}/>
                    </div>
                    <div className="col-sm-8" key="divTableList">
                        <TableListNch55 tableList = {this.state.tableList}
                            viewTable ={this.viewTable}
                            editTable = {this.editTable}
                            deleteTable ={this.deleteTable}/>
                            <br/>
                            <DisplayTableNch55 key="displayTable" tableData={this.state.tableToView}/>
                    </div>
                    </div>
                </div>
            

        );
    }
}

export default LearnNch55;

