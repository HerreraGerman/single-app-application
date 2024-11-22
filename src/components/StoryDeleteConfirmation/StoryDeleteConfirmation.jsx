import React from 'react';
import '../styles/App.css';

const DeleteConfirmation = ({ onConfirmDelete, onCancel, isSubmitting }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Delete Task</h3>
                <p>Are you sure you want to delete this task?</p>
                <div className="button-group">
                    <button className='delete-button' onClick={onConfirmDelete} disabled={isSubmitting}>{isSubmitting ? "Deleting..." : "Delete"}</button>
                    <button className='delete-button' onClick={onCancel} disabled={isSubmitting}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmation;