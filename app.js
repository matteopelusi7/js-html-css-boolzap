const app = new Vue({

    el: '#app',
    data: {

        contacts: [

            {
                name: 'Michele',
                avatar: 'https://picsum.photos/id/237/200',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        toggleButton: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        toggleButton: false
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'https://picsum.photos/seed/picsum/200',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        toggleButton: false
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        toggleButton: false
                    }
                ],
            
            },   
            {
                name: 'Samuele',
                avatar: 'https://picsum.photos/200',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        toggleButton: false
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received',
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: 'https://picsum.photos/id/500/200',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        toggleButton: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],

    currentIndex: 0,
    textMessage: '',
    searchContacts: '',
    // toggleButton: false,
    
},

    methods: {

        goContact: function(i) {
            
            this.currentIndex = i;

        },

        newMessage: function(i) {

            if(this.textMessage !== '') {

                const defMessage = this.createMessage(this.textMessage, 'sent')
                
                this.contacts[i].messages.push(defMessage);
                
            }
            
            this.textMessage = '';

            setTimeout(() => {

                const defMessage = this.createMessage('Ok', 'received')

                this.contacts[i].messages.push(defMessage);

            }, 1000);

        },

        createMessage: function(text, status) {

            const date = new Date();

            const newMessageText = {
                date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
                text,
                status,
                toggleButton: false
            }

            return newMessageText;

        },

        searchContact: function () {

            for ( let i = 0; i < this.contacts.length; i++)  {

                let nameArray = this.contacts[i].name.toLowerCase();
                let nameSearch = this.searchContacts.toLowerCase();

                if ( nameArray.includes(nameSearch) ) {

                    this.contacts[i].visible = true;

                } else {

                    this.contacts[i].visible = false;

                }

            }
        },

        toggle: function(i) {

            this.contacts[this.currentIndex].messages[i].toggleButton = !this.contacts[this.currentIndex].messages[i].toggleButton;

        },

        deleteMessage: function(i) {

            this.contacts[this.currentIndex].messages.splice(i, 1);

        }

    }
    
});