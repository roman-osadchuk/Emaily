import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


export const Dashboard = () => (
    <div>
        Admin Dashboard

        <Link to="/surveys/new" >
            <Button variant="fab" color="primary" aria-label="Add" className="dashboard_button">
                <AddIcon />
            </Button>
        </Link>
    </div>
)
