import React from 'react';

export default function Alert(props) {
    const capitalize = (text) => {
        if (text) {
            return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        }
        return '';
    };

    const { alert } = props;
    return (
        alert && (
            <div className={`alert alert-${alert.Type}`}>
                <strong>{capitalize(alert.Type)}:</strong> {alert.msg}
            </div>
        )
    );
}
