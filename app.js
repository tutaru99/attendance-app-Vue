new Vue({
el: '#app',
data: {
    attendance: {
        attendanceDate: '19 March',
        attendanceTitle: 'Attendance',
        attendanceSignUpText: 'Add thou name to the attendace list: ',
        attendanceDescription: 'U wont be there fam'
    },
    newAttendantName: '',
    attendantName: [], 
    courseCapacity: 10,
    courseCapacityPercentage: 0,

},
methods: {
    formSubmited: function() {
        if (this.newAttendantName.length > 0 && this.courseCapacityPercentage < 100) {
            this.attendantName.push(this.newAttendantName);
            this.newAttendantName = '',
            this.courseCapacityPercentage = this.attendantName.length / (this.courseCapacity / 100);

        }

    },
        

    clearEnd: function() {
        this.attendantName = []; 
        this.courseCapacityPercentage = 0;
    }


},
computed: {
    sortNames: function () {
        return this.attendantName.sort()
    }
},
filters: {
    capitalize: function(kitens) {
        return kitens.slice(0, 1).toUpperCase() + kitens.slice(1).toLowerCase();
    }
}
})



