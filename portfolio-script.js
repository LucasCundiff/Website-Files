

function loadRecentProjectsBody(){
    document.getElementById("recent-projects").innerHTML += `<button class="project-button"onclick="loadProject(${0})">${allProjects[0].title}</button>`;
    document.getElementById("recent-projects").innerHTML += `<button class="project-button"onclick="loadProject(${1})">${allProjects[1].title}</button>`;
    document.getElementById("recent-projects").innerHTML += `<button class="project-button"onclick="loadProject(${2})">${allProjects[2].title}</button>`;
    document.getElementById("recent-projects").innerHTML += `<button class="project-button"onclick="loadProject(${3})">${allProjects[3].title}</button>`;
    document.getElementById("recent-projects").innerHTML += `<button class="project-button"onclick="loadProject(${4})">${allProjects[4].title}</button>`;
    loadProject(0);
 }
 
 function loadProject(projectIndex){
     document.getElementById("project-header").innerHTML = allProjects[projectIndex].title;
     document.getElementById("project-description").innerHTML = allProjects[projectIndex].description;
     let projImg = document.getElementById("project-img");
     projImg.src = allProjects[projectIndex].imageLink;
     let projLink = document.getElementById("project-link");
     projLink.href = allProjects[projectIndex].projectLink;
     document.getElementById("source-code-txt").innerHTML = allProjects[projectIndex].sampleCode;
 }

 function loadAllProjects(){
    const body = document.getElementById("all-projects")
    body.innerHTML = ""
    allProjects.forEach(project => {
        body.innerHTML += `
        <h3 id="project-header">${project.title}</h3>
        <h4>Brief Description</h4>
        <p id="project-description" style="max-width: 600px; margin: auto; padding-bottom: 25px;">${project.description}</p>
        <h4>Project Link: <span><a id="project-link" href="${project.projectLink}">Link to project</a></span></h4>
        `
    });

 }
 
 /*
 ---------Project Template---------
     {
         "title":"",
         "description":"",
         "imageLink":"",
         "projectLink":"",
         "sampleCode":
         `
         `
     },
 
 */


//Add new projects to the top of the array to ensure they're added to the html properly
const allProjects = 
[
    { //31 In Python
        "title":"31 in Python",
        "description":"Enjoy this text-based version of the classic card game, 31. Made in Python 3, you'll be able to pick your name, number of opponents, and engage in fun strategic gameplay!",
        "imageLink":"project-pictures\\31PythonFile.png",
        "projectLink":"https://github.com/LucasCundiff/Thirty-One-In-Python",
        "sampleCode":
        `
def determine_score(hand):
    total_values = [0, 0, 0, 0, 0]
    for x in hand:
        if x.card_type == "hearts":
            total_values[0] += x.card_value
        if x.card_type == "diamonds":
            total_values[1] += x.card_value
        if x.card_type == "spades":
            total_values[2] += x.card_value
        if x.card_type == "clubs":
            total_values[3] += x.card_value
    
    if all(card.card_name == hand[0].card_name for card in hand):
        total_values[4] = 30
    
    return max(total_values)
    
    
def get_lowest_card(hand, new_card):
    temp_hand = hand.copy()
    temp_hand.append(new_card)
    highest_score = 0
    lowest_card = new_card
    for x in temp_hand:
        test_hand = [y for y in temp_hand if y != x]
        score = determine_score(test_hand)
        if score > highest_score:
            highest_score = score
            lowest_card = x
        elif score == highest_score and lowest_card.card_value > x.card_value:
            lowest_card = x
    
    return lowest_card
        `
    },
    { //Login Manager
        "title":"Login Manager",
        "description":"Experience a user-friendly Python 3 login manager that offers versatile functionalities. This application allows users to effortlessly create accounts, login to existing ones, and even delete accounts. All user data is stored in a JSON file. The project comes in two versions, a text-based experience and an appJar-based GUI",
        "imageLink":"project-pictures\\ComputerIconFile.gif",
        "projectLink":"https://github.com/LucasCundiff/Login-Managers",
        "sampleCode":
        `
def login():
login_username = input("Please enter your username: ")
accounts = read_accounts()
if login_username in accounts:
    login_username_found(login_username)
else:
    login_username_incorrect(login_username)


def login_username_found(username):
print("username was found")
remaining_attempts = 3
while True:
    attempted_password = input("Enter password: ")
    accounts = read_accounts()
    if attempted_password == accounts[username]:
        print("successful login!")
        successful_login(username)
        break
    else:
        remaining_attempts = remaining_attempts - 1
        if remaining_attempts <= 0:
            print("login attempts exceeded, returning home.")
            main()
            break
        else:
            print(f"Incorrect password please try again. {remaining_attempts} attempts left.")
        `
    },    
    {//Choose your own adventure
        "title":"Choose your own adventure",
        "description":"Embark on a journey through the eyes of a renowned knight, where you dictate the course of events in this text-based 'Choose Your Own Adventure' made using Python 3. Navigate through a multitude of choices, each holding the potential to lead you towards fame and fortune or an grim demise.",
        "imageLink":"project-pictures\\ChooseAdventure.gif",
        "projectLink":"https://github.com/LucasCundiff/Choose-Your-Own-Adventure",
        "sampleCode":
        `
class Scene:
    choice_text = ""
    next_options = []
    entry_text = ""
    is_ending = False

def __init__(self, choice, options, entry, ending=False):
    self.choice_text = choice
    self.next_options = options
    self.entry_text = entry
    self.is_ending = ending

    def run_game():
    global current_scene
    chapter = 1
    while True:
        print("-------------------------------------------------------------------------------------------")
        print(f"                                      Chapter {chapter}                                   ")
        print(current_scene.entry_text)
        if current_scene.is_ending:
            break
        index = 0
        for x in current_scene.next_options:
            print(f"{index + 1}. {x.choice_text}")
            index += 1

        chapter += 1

        while True:
            player_choice = input("What is your choice? ")
            try:
                int_choice = int(player_choice) - 1
            except ValueError:
                "Please try again using the number index displayed before the choice"
            except TypeError:
                "Please try again using the number index displayed before the choice"
            else:
                if -1 < int_choice < index:
                    current_scene = current_scene.next_options[int_choice]
                    break
                else:
                    "Please try again using the number index displayed before the choice"

    print("-------------------------------------------------------------------------------------------")
    print("The end. Thanks for playing!")
    pause = input()    
        `
    },
    {//Website
        "title":"My Website",
        "description":"I have developed this website as a sophisticated platform to showcase my portfolio professionally. Here, you can explore an array of my diverse projects, demonstrating my skills and dedication to coding.",
        "imageLink":"project-pictures\\PortfolioIcon.png",
        "projectLink":"https://lucascundiff.github.io/Website-Files/index.html",
        "sampleCode":
        `
        header{  
            display: flex;
            flex-direction: column;
            background-color: #1D1D1D;
            text-align: left;
            max-height: 200px;
            max-width: 1920px;
            padding-left: 15px;
            margin: 0;
        }
        
        .nav-buttons{
            display: flex;
            flex-direction: row;
            background-color: #1D1D1D;
            max-height: 50px;
        }
        
        .nav-button-active{
            background-color: #353535;
            font-size: 15px;
            color: #97BFBF;
            display: inline-block;
            text-decoration: none;
            text-align: center;
            padding: 10px;
        }
        
        .nav-button-inactive{
            background-color: #1D1D1D;
            font-size: 15px;
            color: #97BFBF;
            display: inline-block;
            text-decoration: none;
            text-align: center;
            padding: 10px;
        }
        `
    },
    {//Guardian Project
        "title":"The Guardian Project",
        "description":"Dive into my work-in-progress Unity 3D game, where you assume the role of an arcane construct, imbued with the souls of the mightiest warriors. Tragically, you find yourself cast into the depths of hell. It's now up to you to harness your collective might, battling formidable foes as you seek to escape this infernal realm. ",
        "imageLink":"project-pictures\\GuardianProjectFile.png",
        "projectLink":"https://www.dropbox.com/sh/o36q4q9y7yg73na/AAB8gyCuuTvObb7uOMac-jLIa?dl=0",
        "sampleCode":
        `
public class CharacterStats : MonoBehaviour, IDamageable
{
    public Faction Faction;
        
    public List<Stat> Stats = new List<Stat>
    {
        //stat(starting value, max value, stat name)
        new Stat(100f, Mathf.Infinity,"Health"),
        new Stat(200f, Mathf.Infinity,"Mana"),
        new Stat(200f, Mathf.Infinity,"Stamina"),
        new Stat(1f, 500f,"Melee Proficiency"),
        new Stat(1f, 500f,"Ranged Proficiency"),
        new Stat(1f, 100f,"Mana Proficiency"),
        new Stat(1f, 100f,"Stamina Proficiency"),
        new Stat(1f, 500f,"Attack Speed"),
        new Stat(1f, 100f,"Cooldown Reduction"),
        new Stat(0f, 500f,"Armor"),
        new Stat(0f, 500f,"Resistance"),
        new Stat(0.5f, 500f,"Regeneration"),
        new Stat(5f, 50f,"Movement Speed"),
        new Stat(1f, 100f,"Damage Multiplier"),
        new Stat(1f, 100f,"Damage Received"),
    };
        
    public Action<float, float> HealthChangedEvent;
    public Action<float, float> HealthShieldChangedEvent;
    public Action<float, float> ManaChangedEvent;
    public Action<float, float> StaminaChangedEvent;
    public Action OnDeathEvent;
        
    public float MaxHealth { get; private set; }
    public float MaxMana { get; private set; }
    public float MaxStamina { get; private set; }
        
    protected float currentHealth;
    public float CurrentHealth
    {
        get { return currentHealth; }
        set
        {
            currentHealth = Mathf.Clamp(value, 0f, MaxHealth);
            HealthChangedEvent?.Invoke(currentHealth, MaxHealth);
        
            if (!isRegenerating)
                StartCoroutine(RegenerateStats());
        }
    }
        
    protected float healthShield;
    public float HealthShield
    {
        get { return healthShield; }
        set
        {
            healthShield = Mathf.Clamp(value, 0f, MaxHealth);
            HealthShieldChangedEvent?.Invoke(healthShield, MaxHealth);
        
            if (!isRegenerating)
                StartCoroutine(RegenerateStats());
        }
    }
        
    protected float currentMana;
    public float CurrentMana
    {
        get { return currentMana; }
        set
        {
            currentMana = Mathf.Clamp(value, 0f, MaxMana);
            ManaChangedEvent?.Invoke(currentMana, MaxMana);
        
            if (!isRegenerating)
                StartCoroutine(RegenerateStats());
        }
    }
        
    protected float currentStamina;
    public float CurrentStamina
    {
        get { return currentStamina; }
        set
        {
            currentStamina = Mathf.Clamp(value, 0f, MaxStamina);
            StaminaChangedEvent?.Invoke(currentStamina, MaxStamina);
        
            if (!isRegenerating)
                StartCoroutine(RegenerateStats());
        }
    }
        
    public bool IsDead = false;
    protected bool isRegenerating;
    protected float resourceRegenerationMuliplier = 3;
        
    protected void OnEnable() => CharacterTracker.Instance?.RegisterCharacterToTracker(this);
    protected void OnDisable() => CharacterTracker.Instance?.UnregisterCharacterToTracker(this);
    protected void OnDestroy() => CharacterTracker.Instance?.UnregisterCharacterToTracker(this);
        
    public void Awake()
    {
        Stats[0].StatModifiedEvent += HealthStatChanged;
        Stats[1].StatModifiedEvent += ManaStatChanged;
        Stats[2].StatModifiedEvent += StaminaStatChanged;
        
        MaxHealth = Stats[0].CurrentValue;
        MaxMana = Stats[1].CurrentValue;
        MaxStamina = Stats[2].CurrentValue;
        
        HealthShield = 0f;
        CurrentHealth = MaxHealth;
        CurrentMana = MaxMana;
        CurrentStamina = MaxStamina;
    }
        
    protected virtual IEnumerator RegenerateStats()
    {
        isRegenerating = true;
        
        while (CurrentHealth < MaxHealth || CurrentMana < MaxMana || CurrentStamina < MaxStamina)
        {
            if (IsDead) break;
        
            var regenerationAmount = Mathf.Clamp(Stats[11].CurrentValue, 0, Stats[11].CurrentValue);
        
            if (CurrentHealth < MaxHealth)
                CurrentHealth += regenerationAmount;
        
            if (CurrentMana < MaxMana)
                CurrentMana += regenerationAmount * resourceRegenerationMuliplier;
        
            if (CurrentStamina < MaxStamina)
                CurrentStamina += regenerationAmount * resourceRegenerationMuliplier;
        
            yield return new WaitForSeconds(1f);
        }
        
        isRegenerating = false;
        
    }
        
    public void HealthStatChanged(Stat healthStat)
    {
        var healthChangeAmount = healthStat.CurrentValue - MaxHealth;
        MaxHealth = healthStat.CurrentValue;
        CurrentHealth += healthChangeAmount;
    }
        
    public void ManaStatChanged(Stat manaStat)
    {
        var manaChangeAmount = manaStat.CurrentValue - MaxMana;
        MaxMana = manaStat.CurrentValue;
        CurrentMana += manaChangeAmount;
    }
        
    public void StaminaStatChanged(Stat staminaStat)
    {
        var staminaChangeAmount = staminaStat.CurrentValue - MaxStamina;
        MaxStamina = staminaStat.CurrentValue;
        CurrentStamina += staminaChangeAmount;
    }
        
    public bool TakeDamage(float damage)
    {
        if (damage > 0)
        {
            var damageToTake = damage * Stats[14].CurrentValue;
        
            if (HealthShield > 0)
            {
                damageToTake -= healthShield;
                HealthShield -= damage;
            }
        
            CurrentHealth -= damageToTake;
        
            if (CurrentHealth <= 0)
            {
                Die();
            }
        
            return true;
        }
        
        return false;
    }

    public virtual void Die()
    {
        if (!IsDead)
        {
            IsDead = true;
            OnDeathEvent?.Invoke();
        }
    }
        
}        
        `
    },
]